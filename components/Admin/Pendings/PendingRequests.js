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
    }, [isFocus])
    const getPendings = () => {
        const Data = [];
        setLoading(true)
        firestore()
            .collection('Pendings')
            .get()
            .then((queryData) => {
                queryData.forEach((doc) => {
                    const { handymanID, postID, post } = doc.data();
                    Data.push({
                        id: doc.id,
                        handymanID, handymanID,
                        postID: postID,
                        post: post
                    })
                })

                setList(Data)
                setLoading(false)
            }).catch((err) => {
                console.log(err)
                setLoading(false)

            })
    }
    return (

        <ScrollView>
            <View style={{ backgroundColor: 'white', padding: 5 }}>


                <View style={{ marginTop: 20, padding: 10 }}>
                    <Text style={styles.primaryHeading}>Pending Requests</Text>
                </View>
                {loading ? <ActivityIndicator /> : (list.length !== 0 ? list.map((element, index) => {
                    return <AdminPendingsBox key={index} element={element} index={index} />
                    
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