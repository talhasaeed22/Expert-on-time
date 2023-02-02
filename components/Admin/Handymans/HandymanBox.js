import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const HandymanBox = ({ element, index, deleteHandman }) => {
    return (
        <View style={{ padding: 20 }} key={index}>
            <View style={styles.box}>
                <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Handyman's Name</Text>

                            <Text style={{ fontSize: 15 }}>{element.name}</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Handyman's Email</Text>

                            <Text style={{ fontSize: 15 }}>{element.email}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Handyman's Password</Text>

                            <Text style={{ fontSize: 15 }}>{element.password}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ paddingTop: 8 }}>
                            <Material name="face-man-outline" color='black' size={70} />
                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20, borderBottomWidth: 1, paddingBottom: 10, borderBottomColor: '#dedede' }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Handyman's Phone Number</Text>

                        <Text style={{ fontSize: 15 }}>{element.phone}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{element.category}</Text>

                        <Text style={{ fontSize: 15, }}>Category</Text>
                    </View>
                </View>

                <View style={{display:'flex', alignItems:'flex-end', }}>
                    <View style={{ paddingTop: 8, display:'flex', flexDirection:'row', gap:20, alignItems:'center' }}>
                        {/* <FontAwesome name="edit" color='black' size={22} /> */}
                        <Icon onPress={()=>{deleteHandman(element.id)}} name="trash" color='red' size={32} />
                    </View>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        padding: 15,
        display: 'flex',
        gap: 20,
        shadowColor: "#000",
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 10
    }
})

export default HandymanBox