import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Avatar, TextInput, Button } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-crop-picker';

const OngoingBox = ({ index, element, FinishJob }) => {
    const [imageBefore, setImageBefore] = useState('')
    const [imageAfter, setImageAfter] = useState('')
    const handleBeforeImage = ()=>{
        ImagePicker.openPicker({
            
           cropping:true
          }).then(image => {
            console.log(image);
            const imaeUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
            setImageBefore(imaeUri);
          }).catch((err)=>{
            console.log(err)
          })
    }
    const handleAfterImage = ()=>{
        ImagePicker.openPicker({
            
            cropping:true
            
          }).then(image => {
            console.log(image);
            const imaeUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
            setImageAfter(imaeUri);
          }).catch((err)=>{
            console.log(err)
          })
    }

    const handlePress = ()=>{
        if(imageAfter === '' || imageBefore === ''){
            Alert.alert('Warning','Please Upload Requried Images')
        }else{
            FinishJob(element, element.id, imageBefore, imageAfter)
        }
    }
    return (
        <ScrollView>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', paddingBottom: 20 }}>
                <View style={styles.box} key={index}>
                    <View style={{ display: "flex", flexDirection: 'column', gap: 25, }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Name</Text>

                            <Text style={{ fontSize: 15 }}>{element.acceptedJobs.post.name}</Text>
                        </View>

                      
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Payment</Text>

                            <Text style={{ fontSize: 15 }}>{element.acceptedJobs.post.budget}£</Text>
                        </View>


                    </View>

                    <View style={{ display: "flex", flexDirection: 'column', gap: 25, }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Category</Text>
                            <Text style={{ fontSize: 15, color: 'red', fontWeight: 'bold' }}>{element.acceptedJobs.post.category}</Text>

                        </View>

                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Status</Text>
                            <Text style={{ fontSize: 15, color: '#eed202', fontWeight: 'bold' }}>{'Ongoing'}</Text>
                        </View>
                    </View>

                </View>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',   padding: 10,}}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Address</Text>

                    <Text style={{ fontSize: 15 }}>{element.acceptedJobs.post.address}</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',   padding: 10, }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Job Description</Text>

                    <Text style={{ fontSize: 15 }}>{element.acceptedJobs.post.brief}</Text>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}></View>
                <View style={{ paddingVertical: 10,   padding: 10, }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black', }}>Image Before Work</Text>
                    <View style={{ padding: 10, }}>
                        {imageBefore !== '' ? <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'orangered' }}>Image Uploaded</Text> : <TouchableOpacity onPress={handleBeforeImage}><MaterialComm name='image-plus' size={50} color='black' /></TouchableOpacity>}
                    </View>
                </View>
                <View style={{ paddingVertical: 10,   padding: 10, }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black',    }}>Image After Work</Text>
                    <View style={{ padding: 10, }}>
                        {imageAfter !== '' ? <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'orangered' }}>Image uploaded</Text> : <TouchableOpacity onPress={handleAfterImage}><MaterialComm name='image-plus' size={50} color='black' /></TouchableOpacity>}
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={handlePress} style={{ paddingVertical: 15, display: 'flex', flexDirection: "row", gap: 10 }}>

                        <Button buttonColor='#0d98ba' labelStyle={{ fontSize: 17, fontWeight: "bold", textAlign: "center", }} color='white' style={{ padding: 5, borderRadius: 10 }} mode="contained">
                            Finish
                        </Button>
                    </TouchableOpacity>
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

export default OngoingBox