import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const AdminPendingsBox = ({ element, index, acceptJob, rejectJob }) => {

    const styles = StyleSheet.create({


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
    return (
        <View key={index} style={{ padding: 20, borderBottomWidth:1, borderBottomColor:'lightgray' }}>
            <View style={styles.box} >
                <View style={{ display: "flex", flexDirection: 'column', gap: 10, }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Name</Text>

                        <Text style={{ fontSize: 15 }}>{element.post.name}</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Email</Text>

                        <Text style={{ fontSize: 15 }}>{element.post.email}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Phone Number</Text>

                        <Text style={{ fontSize: 15 }}>{element.post.phone}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Address</Text>

                        <Text style={{ fontSize: 15 }}>{element.post.address}</Text>
                    </View>
                </View>

                <View style={{ display: "flex", flexDirection: 'column', gap: 10, }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Category</Text>
                        <Text style={{ fontSize: 17, color: 'red', fontWeight: 'bold' }}>{element.post.category}</Text>

                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Budget</Text>

                        <Text style={{ fontSize: 15 }}>{element.post.budget}</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Breif</Text>

                        <Text style={{ fontSize: 15 }}>{element.post.brief}</Text>
                    </View>

                </View>

            </View>

            <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgray", paddingVertical: 10 }}></View>

            <View style={{display:"flex", gap:20, padding:10}} >
                <View style={{ display: "flex", flexDirection: 'column', gap: 10, }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Handyman Name</Text>

                        <Text style={{ fontSize: 15 }}>{element.handymanName}</Text>
                    </View>
                    
                </View>

                <View style={{ display: "flex", flexDirection: 'column', gap: 10, }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>HandyMan Email</Text>

                        <Text style={{ fontSize: 15 }}>{element.handymanEmail}</Text>
                    </View>

                </View>

            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <View style={{ paddingVertical: 15, display: 'flex', flexDirection: "row", gap: 10 }}>
                    <TouchableOpacity onPress={() => {acceptJob(element, element.id, element.post.id)  }}>
                        <Button buttonColor='#03b944' labelStyle={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }} color='white' style={{ padding: 5, borderRadius: 10 }} mode="contained">
                            Accept
                        </Button>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {rejectJob( element.id)  }}>
                        <Button buttonColor='red' labelStyle={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }} color='white' style={{ padding: 5, borderRadius: 10 }} mode="contained">
                            Reject
                        </Button>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default AdminPendingsBox