import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import AdminPendingsBox from './AdminPendingsBox'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useIsFocused } from '@react-navigation/native'
import Messagemodal from '../../Messagemodal'
const PendingRequests = () => {
    const isFocus = useIsFocused()
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const CloseModal = () => {
        setModalVisible(false);
    }
    useEffect(() => {
        getPendings();
    }, [isFocus, update])
    const getPendings = () => {
        const Data = [];
        setLoading(true)
        firestore()
            .collection('Pendings')
            .get()
            .then((queryData) => {
                queryData.forEach((doc) => {
                    const { handymanID, postID, post, handymanName, handymanEmail } = doc.data();
                    Data.push({
                        id: doc.id,
                        handymanID, handymanID,
                        postID: postID,
                        post: post,
                        handymanName: handymanName,
                        handymanEmail: handymanEmail
                    })
                })

                setList(Data)
                setLoading(false)
            }).catch((err) => {
                console.log(err)
                setLoading(false)

            })
    }
    const [loadingAccept, setLoadingAccept] = useState(false)
    const acceptJob = (toBePost, key, post) => {
        let handymans = [];
        setLoadingAccept(true)
        firestore().collection('posts').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                if (doc.id === post.id) {
                    const { handyman } = doc.data();
                    handyman.forEach((handy) => {
                        handymans.push(handy);
                    })
                }
            })
            firestore()
                .collection('Accepted')
                .add({
                    acceptedPost: toBePost
                }).then(() => {
                    //Deleting from Pendings
                    let ids = []
                    firestore().collection('Pendings').get().then((document) => {
                        document.forEach((doc) => {
                            const { handymanID, postID } = doc.data();
                            handymans.forEach((hand) => {
                                if (hand === handymanID && post.id === postID) {
                                    ids.push(doc.id)
                                }
                            })
                        })
                        ids.forEach((id) => {
                            firestore().collection('Pendings').doc(id).delete().then(() => { })
                        })
                        firestore()
                            .collection('posts')
                            .doc(post.id)
                            .update({
                                status: 'Ongoing'
                            }).then(() => {
                                setTitle('Success')
                                setMessage('Request Accepted')
                                setModalVisible(true);
                                setLoadingAccept(false)
                                setUpdate(!update)
                            }).catch((err) => {
                                console.log(err)
                                setLoadingAccept(false)
                            })
                    }).catch((err) => {
                        console.log(err)
                        setLoadingAccept(false)
                    })

                }).catch(() => {
                    console.log(err);
                    setLoadingAccept(false)
                })
        }).catch((err) => {
            console.log(err)
            setLoadingAccept(false)
        })


    }

    const rejectJob = (key) => {
        setLoadingAccept(true)
        firestore()
            .collection('Pendings').doc(key)
            .delete()
            .then(() => {
                setUpdate(!update)
                setLoadingAccept(false)
            }).catch((err) => {
                console.log(err);
                setLoadingAccept(false)
            })
    }
    return (

        <ScrollView>
            <View style={{ backgroundColor: 'white', padding: 5 }}>


                <View style={{ marginTop: 20, padding: 10 }}>
                    <Text style={styles.primaryHeading}>Pending Requests</Text>
                </View>
                {loading ? <ActivityIndicator /> : (list.length !== 0 ? list.map((element, index) => {
                    return <AdminPendingsBox loadingAccept={loadingAccept} rejectJob={rejectJob} acceptJob={acceptJob} key={index} element={element} index={index} />

                }) :
                    <View style={{ display: "flex", alignItems: "center", marginTop: 30, }}>
                        <Icon name='folder-text-outline' size={35} color='black' />
                        <Text style={{ textAlign: "center", fontWeight: "bold" }}>No Pending Requests</Text>
                    </View>)}

            </View>
            <Messagemodal title={title} modalVisible={modalVisible} CloseModal={CloseModal} message={message} />

        </ScrollView>
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
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    }

})


export default PendingRequests