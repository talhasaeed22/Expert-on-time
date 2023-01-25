import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/EvilIcons'
const Posts = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = () => {
        const Data = [];
        setLoading(true)
        firestore()
            .collection('posts')
            .get()
            .then((queryData) => {
                queryData.forEach((doc) => {
                    const { name, email, address, phone, postalCode, budget, price, brief, category } = doc.data();

                    Data.push({
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

                })
                setList(Data)
                setLoading(false)
            }).catch((err) => {
                console.log(err)
                setLoading(false)

            })
    }
    return (
        <View style={{ padding: 20 }}>
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.primaryHeading}>Posts Details</Text>
            </View>
            <ScrollView>
                {loading ? <ActivityIndicator /> : list.map((element, index) => {
                    return <View style={{ marginTop: 10, display: "flex", gap: 10 }} key={index}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Client Name</Text>
                                <Text style={{ fontSize: 18 }}>{element.name}</Text>
                            </View>
                            <View style={{paddingTop:4}}>
                                <Text style={{fontSize:24, fontWeight:'bold'}}>{index + 1}</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Client Email</Text>

                            <Text style={{ fontSize: 18 }}>{element.email}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Client Address</Text>

                            <Text style={{ fontSize: 18 }}>{element.address}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Client Ph one Number</Text>

                            <Text style={{ fontSize: 18 }}>{element.phone}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Postal Code</Text>

                            <Text style={{ fontSize: 18 }}>{element.postalCode}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Budget</Text>

                            <Text style={{ fontSize: 18 }}>{element.budget}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Price</Text>

                            <Text style={{ fontSize: 18 }}>{element.price}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Breif</Text>

                            <Text style={{ fontSize: 18 }}>{element.brief}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{element.category}</Text>
                                <Text style={{ fontSize: 18, }}>Category</Text>
                            </View>
                            <View style={{ paddingTop: 8 }}>
                                <Icon name="trash" color='red' size={32} />
                            </View>
                        </View>
                    </View>
                })}
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

})

export default Posts