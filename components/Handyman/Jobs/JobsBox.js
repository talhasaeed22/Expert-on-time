import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Avatar, TextInput, Button } from 'react-native-paper';

const JobsBox = ({ index,element }) => {
    return (
        <ScrollView>
            <View style={{borderBottomWidth:1, borderBottomColor:'lightgray'}}>
                <View style={styles.box} key={index}>
                    <View style={{ display: "flex", flexDirection: 'column', gap: 10, }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Name</Text>

                            <Text style={{ fontSize: 15 }}>{element.name}</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Email</Text>

                            <Text style={{ fontSize: 15 }}>{element.email}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Phone Number</Text>

                            <Text style={{ fontSize: 15 }}>{element.phone}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Address</Text>

                            <Text style={{ fontSize: 15 }}>{element.address}</Text>
                        </View>
                    </View>

                    <View style={{ display: "flex", flexDirection: 'column', gap: 10, }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Category</Text>
                            <Text style={{ fontSize: 17, color:'red', fontWeight:'bold'}}>{element.category}</Text>

                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Budget</Text>

                            <Text style={{ fontSize: 15 }}>{element.budget}</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Breif</Text>

                            <Text style={{ fontSize: 15 }}>{element.brief}</Text>
                        </View>
                        
                    </View>

                </View>
                <View style={{  alignItems: 'flex-end' }}>
                    <View style={{ paddingVertical: 15, display:'flex', flexDirection:"row", gap:10 }}>
                        <TouchableOpacity onPress={()=>{Alert.alert("Functionality Comming Soon")}}>
                            <Button icon={()=>(<Icon name='check' size={20} color='white' />)} buttonColor='#03b944' labelStyle={{fontSize:15, fontWeight:"bold", textAlign:"center"}} color='white' style={{  padding: 5, borderRadius: 10 }} mode="contained">
                                Accept
                            </Button>
                        </TouchableOpacity>
                    </View>
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
        borderRadius: 10
    }

})

export default JobsBox