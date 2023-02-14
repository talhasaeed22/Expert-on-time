import { View, Text, ScrollView, StyleSheet, ActivityIndicator, ToastAndroid, Platform, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import PostDetailBox from './PostDetailBox'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useIsFocused } from "@react-navigation/native";
import Messagemodal from '../../Messagemodal'
import { SelectList } from 'react-native-dropdown-select-list'

const Posts = () => {
    const isFocused = useIsFocused();
    const [foundPending, setFoundPending] = useState(false)

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false);
    const [deleted, setDeleted] = useState(false)
    const [count, setCount] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const [filter, setFilter] = useState('All')

    const CloseModal = () => {
        setModalVisible(false);
    }
    useEffect(() => {
        getPosts();
    }, [deleted, isFocused])


    const data = [
        { key: '1', value: '1 Year', },
        { key: '2', value: '1 Month' },
        { key: '2', value: 'All' },
    ]
    const changeFilter = (val) => {
        setFilter(val)
        setDeleted(!deleted)
    }

    const getPosts = async () => {
        setFoundPending(false)
        const Data = [];
        setCount(0);
        let counted = 0;

        setLoading(true)
        firestore()
            .collection('posts')
            .get()
            .then((queryData) => {
                queryData.forEach(async (doc) => {
                    const { name, status, email, address, phone, postalCode, budget, price, brief, category, month, date, year } = doc.data();
                    const getDate = new Date();
                    if (filter === '1 Month') {
                        if (month === getDate.getMonth() + 1 && year === getDate.getFullYear()) {
                            Data.push({
                                id: doc.id,
                                name: name,
                                email: email,
                                address: address,
                                phone: phone,
                                postalCode: postalCode,
                                budget: budget,
                                price: price,
                                brief: brief,
                                category: category,
                                status: status,
                                date: date,
                                month: month,
                                year: year,
                            })
                        }
                    } else if (filter === '1 Year') {
                        Data.push({
                            id: doc.id,
                            name: name,
                            email: email,
                            address: address,
                            phone: phone,
                            postalCode: postalCode,
                            budget: budget,
                            price: price,
                            brief: brief,
                            category: category,
                            status: status,
                            date: date,
                            month: month,
                            year: year,
                        })
                    } else if (filter === 'All') {
                        Data.push({
                            id: doc.id,
                            name: name,
                            email: email,
                            address: address,
                            phone: phone,
                            postalCode: postalCode,
                            budget: budget,
                            price: price,
                            brief: brief,
                            category: category,
                            status: status,
                            date: date,
                            month: month,
                            year: year,
                        })
                    }
                    counted++;

                })
                setCount(counted);
                setList(Data)
                setLoading(false)
            }).catch((err) => {
                console.log(err)
                setLoading(false)

            })
    }
    const deletePost = (key) => {
        firestore()
            .collection('Accepted')
            .get()
            .then((snapshot) => {
                let foundongoing = false;
                snapshot.forEach((doc) => {
                    const { acceptedPost } = doc.data();
                    if (acceptedPost.post.id === key) {
                        foundongoing = true;
                    }
                })
                if (foundongoing) {
                    setTitle('Warning')
                    setMessage('Job is already ongoing!')
                    setModalVisible(true);
                }else{
                    firestore()
                        .collection('posts')
                        .doc(key)
                        .delete()
                        .then(() => {
            
                            ToastAndroid.showWithGravity(
                                'Post Deleted',
                                ToastAndroid.LONG,
                                ToastAndroid.CENTER,
                            );
            
                            setDeleted(!deleted)
                        }).catch((err)=>{console.log(err)})
                }

            }).catch((err) => { console.log(err); })
        

    }
    return (
        <View style={{ padding: 15, backgroundColor: "white", height: Dimensions.get('window').height }}>
            <ScrollView>
                <View style={{ marginBottom: 15 }}>
                    <Text style={styles.primaryHeading}>Posts Details</Text>
                </View>
                <View style={styles.box}>
                    <View style={{ display: 'flex' }}>
                        <Text style={{ fontSize: 20, color: "white", fontWeight: 'bold' }}>Total Posts</Text>
                        <Text style={{ fontSize: 35, padding: 8, color: 'white', fontWeight: 'bold' }}>{count}</Text>
                    </View>

                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10, paddingLeft: 17, paddingRight: 17, }}>
                        <Icon name='post-outline' size={40} color={'black'} />
                        {/* <Text style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>View More</Text> */}
                    </View>

                </View>
                <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center", marginBottom: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: "black" }}>Filter</Text>
                    <View>
                        <SelectList
                            boxStyles={{ backgroundColor: 'white', width: 150 }}
                            dropdownStyles={{ backgroundColor: "white" }}
                            dropdownTextStyles={{ fontWeight: 'bold', color: "black" }}
                            inputStyles={{ fontWeight: "bold", color: "black" }}
                            placeholder='Select'
                            setSelected={(val) => changeFilter(val)}
                            data={data}
                            save="value"
                        />
                    </View>
                </View>


                {loading ? <ActivityIndicator /> : (list.length !== 0 ? list.map((element, index) => {
                    return <View style={{ paddingHorizontal: 5 }} key={index}>
                        <PostDetailBox deletePost={deletePost} element={element} index={index} />
                    </View>
                }) :
                    <View style={{ display: "flex", alignItems: "center", marginTop: 30, }}>
                        <Icon name='folder-text-outline' size={35} color='black' />
                        <Text style={{ textAlign: "center", fontWeight: "bold" }}>No Posts Added</Text>
                    </View>)}
                <Messagemodal title={title} modalVisible={modalVisible} CloseModal={CloseModal} message={message} />
                <View style={{ paddingTop: 150 }}></View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    primaryHeading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline',

    },
    box: {
        // #f8c42a
        backgroundColor: '#4e75ec',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 60,
        paddingLeft: 30,
        paddingRight: 15,
        borderRadius: 7,
        color: 'white',
        marginBottom: 20
    },

})

export default Posts