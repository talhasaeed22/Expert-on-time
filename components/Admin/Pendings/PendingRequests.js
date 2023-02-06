import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Dimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import AdminPendingsBox from './AdminPendingsBox'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useIsFocused } from '@react-navigation/native'
const PendingRequests = () => {
    const isFocus = useIsFocused()
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false)
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

    const acceptJob = (toBePost, key, post) => {
        let handymans = [];
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
                            firestore().collection('Pendings').doc(id).delete().then(()=>{})
                        })
                        firestore()
                            .collection('posts')
                            .doc(post.id)
                            .update({
                                status: 'Ongoing'
                            }).then(()=>{
                                Alert.alert('Request Accepted');
                                setUpdate(!update)
                            }).catch((err) => {
                                console.log(err)
                            })
                    }).catch((err) => {
                        console.log(err)
                    })

                }).catch(() => {
                    console.log(err);
                })
        }).catch((err) => {
            console.log(err)
        })

        // firestore()
        //     .collection('Accepted')
        //     .add({
        //         acceptedPost: toBePost
        //     }).then(() => {
        //         firestore()
        //             .collection('posts')
        //             .doc(post.id)
        //             .update({
        //                 status: 'Ongoing',
        //                 handyman: toBePost.handymanID
        //             }).then(() => {
        //                 let handymans = [];
        //                 firestore().collection('posts').get().then((snapshot)=>{
        //                     snapshot.forEach((doc)=>{
        //                         if(doc.id === post.id){
        //                             const {handyman} = doc.data();
        //                             handyman.forEach((handy)=>{
        //                                 handymans.push(handy);
        //                             })
        //                         }
        //                     })
        //                 })

        //                 let ids = []
        //                 firestore().collection('Pendings').get().then((document)=>{
        //                     document.forEach((doc)=>{
        //                         const {handymanID} = doc.data();
        //                         handymans.forEach((hand)=>{
        //                             if(hand === handymanID){
        //                                 ids.push(doc.id)
        //                             }
        //                         })
        //                     })
        //                 }).then(()=>{
        //                     ids.forEach((id)=>{
        //                         firestore()
        //                         .collection('Pendings').doc(id).delete()
        //                     })
        //                 })
        //                 firestore().collection('Pendings').doc(key)
        //                     .delete()
        //                     .then(() => {
        //                         Alert.alert('Post Accepted')
        //                         setUpdate(!update)
        //                     })
        //             }).catch((err) => {
        //                 console.log(err)
        //             })
        //     }).catch((err) => {
        //         console.log(err)
        //     })


    }

    const rejectJob = (key) => {
        firestore()
            .collection('Pendings').doc(key)
            .delete()
            .then(() => {
                setUpdate(!update)
            }).catch((err) => {
                console.log(err);
            })
    }
    return (

        <ScrollView>
            <View style={{ backgroundColor: 'white', padding: 5 }}>


                <View style={{ marginTop: 20, padding: 10 }}>
                    <Text style={styles.primaryHeading}>Pending Requests</Text>
                </View>
                {loading ? <ActivityIndicator /> : (list.length !== 0 ? list.map((element, index) => {
                    return <AdminPendingsBox rejectJob={rejectJob} acceptJob={acceptJob} key={index} element={element} index={index} />

                }) :
                    <View style={{ display: "flex", alignItems: "center", marginTop: 30, }}>
                        <Icon name='folder-text-outline' size={35} color='black' />
                        <Text style={{ textAlign: "center", fontWeight: "bold" }}>No Pending Requests</Text>
                    </View>)}

            </View>
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