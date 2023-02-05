import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontsinto from 'react-native-vector-icons/Fontisto'

const OrderBox = ({navigation, element}) => {
    return (
        <View style={styles.Lowerbox}>
            <View>
                <Text style={styles.primaryHeading}>Client Name</Text>
                <Text style={{ fontSize: 16 }}>{element.acceptedPost.post.name}</Text>
                <Text>{'\n'}</Text>
                <Text style={styles.primaryHeading}>Handyman Name</Text>
                <Text style={{ fontSize: 16 }}>{element.acceptedPost.handymanName}</Text>
                <Text>{'\n'}</Text>
                <Text style={styles.primaryHeading}>Handyman Email</Text>
                <Text style={{ fontSize: 16 }}>{element.acceptedPost.handymanEmail}</Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Details', {acceptedPost:element.acceptedPost}) }} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#39be5f', padding: 15, borderRadius: 10 }}>
                <Fontsinto name='prescription' size={31} color={'white'} />
                <Text style={{ fontSize: 14, borderBottomWidth: 1, borderBottomColor: 'white', color: 'white' }}>View Detail</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    box: {
        // #f8c42a
        backgroundColor: 'orangered',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 60,
        paddingLeft: 30,
        paddingRight: 15,
        borderRadius: 7,
        color: 'white',
        // marginBottom: 20
    },
    primaryHeading: {
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold'
    },
    Lowerbox: {
        // #f8c42a

        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingRight: 15,
        borderRadius: 15,
        color: 'white',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})

export default OrderBox