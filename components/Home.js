import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import { Avatar, TextInput, Button } from 'react-native-paper';

const Home = () => {
  const handleLogout = ()=>{
    auth().signOut().then(()=>{
      console.log('signed out')
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <View>
      <Text>{auth().currentUser.email}</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Button style={{ height: 50, alignItems: 'center', justifyContent: "center" }} textColor="black" labelStyle={{ fontSize: 20 }} buttonColor='white' icon="login" mode="contained" >
          Signout
        </Button>
      </TouchableOpacity>
    </View>
  )
}

export default Home