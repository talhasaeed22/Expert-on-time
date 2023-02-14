import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'

const PostDetailBox = ({ element, index, deletePost }) => {

    return (
        <View style={styles.box} key={index}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Post ID</Text>

                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>{element.id}</Text>
                </View>
                <View >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: element.status === 'Ongoing' ? 'orange' : (element.status === 'New' ? "black" : 'green') }}>{element.status}</Text>
                    <Text style={{ fontSize: 15 }}>{''}</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Date</Text>

                <Text style={{ fontSize: 15, color: "orangered", fontWeight: "bold" }}>{element.date}/{element.month}/{element.year}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Name</Text>

                <Text style={{ fontSize: 15 }}>{element.name}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Email</Text>

                <Text style={{ fontSize: 15 }}>{element.email}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Address</Text>

                <Text style={{ fontSize: 15 }}>{element.address}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Phone Number</Text>

                <Text style={{ fontSize: 15 }}>{element.phone}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Postal Code</Text>

                <Text style={{ fontSize: 15 }}>{element.postalCode}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Budget</Text>

                <Text style={{ fontSize: 15 }}>{element.budget}£</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Price</Text>

                <Text style={{ fontSize: 15 }}>{element.price}£</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Breif</Text>

                <Text style={{ fontSize: 15 }}>{element.brief}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Category</Text>

                    <Text style={{ fontSize: 15, }}>{element.category}</Text>
                </View>
                <View style={{ paddingTop: 8 }}>
                    <TouchableOpacity onPress={() => { deletePost(element.id) }}>

                        <Icon name="trash" color='red' size={30} />
                    </TouchableOpacity>
                </View>
            </View>
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
        marginTop: 10,
        display: "flex",
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6
    }

})
export default PostDetailBox