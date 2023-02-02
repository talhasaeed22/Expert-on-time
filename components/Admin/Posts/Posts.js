import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import PostDetailBox from './PostDetailBox'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useIsFocused } from "@react-navigation/native";

const Posts = () => {
    const isFocused = useIsFocused();

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false);
    const [deleted, setDeleted] = useState(false)
    const [count, setCount] = useState(0)
    useEffect(() => {
        getPosts();
    }, [deleted, isFocused])

    const getPosts = () => {
        const Data = [];
        setCount(0);
        let counted = 0;

        setLoading(true)
        firestore()
            .collection('posts')
            .get()
            .then((queryData) => {
                queryData.forEach((doc) => {
                    const { name, email, address, phone, postalCode, budget, price, brief, category } = doc.data();

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
                        category: category
                    })
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
            .collection('posts')
            .doc(key)
            .delete()
            .then(() => {
                Alert.alert('Post Deleted Successfully')
                // setList(null)
                setDeleted(!deleted)
            })

    }
    return (
        <View style={{ padding: 20 }}>
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


                {loading ? <ActivityIndicator /> : (list.length !== 0 ? list.map((element, index) => {
                    return <PostDetailBox key={index} deletePost={deletePost} element={element} index={index} />
                }) :
                    <View style={{ display: "flex", alignItems: "center", marginTop: 30, }}>
                        <Icon name='folder-text-outline' size={35} color='black' />
                        <Text style={{ textAlign: "center", fontWeight: "bold" }}>No Posts Added</Text>
                    </View>)}
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