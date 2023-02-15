import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Avatar, TextInput, Button } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { Dimensions } from 'react-native';
const RecentJobBox = ({ index, element, }) => {
    return (
        <ScrollView>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', paddingBottom: 20 }}>
                <View style={styles.box} key={index}>
                    <View style={{ display: "flex", flexDirection: 'column', gap: 25, }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Name</Text>

                            <Text style={{ fontSize: 15 }}>{element.JobDone.post.name}</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Email</Text>

                            <Text style={{ fontSize: 15 }}>{element.JobDone.post.email}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Address</Text>

                            <Text style={{ fontSize: 15 }}>{element.JobDone.post.address}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Date</Text>

                            <Text style={{ fontSize: 15, color: 'red' }}>{element.date}/{element.month}/{element.year}</Text>
                        </View>

                    </View>

                    <View style={{ display: "flex", flexDirection: 'column', gap: 25, }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Category</Text>
                            <Text style={{ fontSize: 17, color: 'red', fontWeight: 'bold' }}>{element.JobDone.post.category}</Text>

                        </View>

                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Price</Text>

                            <Text style={{ fontSize: 15 }}>{element.JobDone.post.price}£</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Status</Text>
                            <Text style={{ fontSize: 17, color: 'green', fontWeight: 'bold' }}>{'Finished'}</Text>
                        </View>
                    </View>

                </View>
                <View style={{ padding: 10, display: 'flex', gap: 10, }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Before Work Image</Text>
                    <Image source={{ uri: element.beforeWork }} style={{ width: Dimensions.get('window').width - 50, height: 250, borderRadius: 20, alignSelf: 'center' }} resizeMode='cover' />
                </View>

                <View style={{ padding: 10, display: 'flex', gap: 10, }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>After Work Image</Text>
                    <Image source={{ uri: element.afterWork }} style={{ width: Dimensions.get('window').width - 50, height: 250, borderRadius: 20, alignSelf: 'center' }} resizeMode='cover' />
                </View>

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
        borderRadius: 10,

    }

})
export default RecentJobBox