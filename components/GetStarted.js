import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, TextInput, Button } from 'react-native-paper';


const GetStarted = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar.Image size={64} source={require('../images/logo.jpg')} />
          <Text style={styles.title}>Export on Time</Text>
          <Text>EST 2021</Text>
        </View>
        <View>
          <Text style={styles.primary_Heading}>Login</Text>
        </View>

        <View style={styles.loginContainer}>
          <View style={{ padding: 20 }}>
            <Text>Let's Login To Your Account</Text>
            <View style={{ display: "flex", flexDirection: 'column', gap: 3, marginTop: 20 }}>
              <TextInput underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', background: 'transparent' } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius:10 }} label='Email' mode='flat' />
              <TextInput underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', background: 'transparent' } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5' }} label='Password' mode='flat' />
            </View>
          </View>
        </View>
          <View style={styles.buttonsContainer}>
            <Button style={{height:50, alignItems:'center', justifyContent:"center"}} labelStyle={{fontSize:20}} buttonColor='black' icon="login" mode="contained" onPress={() => console.log('Pressed')}>
              Login
            </Button>
            <Text style={{color:'black', textAlign:'center', fontStyle:"italic", fontSize:17}}>Don't Have an Account?</Text>
            <Button style={{height:50, alignItems:'center', justifyContent:"center"}} labelStyle={{fontSize:20}} buttonColor='black' icon="login" mode="contained" onPress={() => console.log('Pressed')}>
              Signup
            </Button>

            <Button style={{height:50, alignItems:'center', justifyContent:"center", marginTop:20}} labelStyle={{fontSize:20}} buttonColor='black' icon="google" mode="contained" onPress={() => console.log('Pressed')}>
              Signup with google
            </Button>
          </View>
         
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // justifyContent: 'center',
    backgroundColor: 'yellow',
    padding: 40,
    gap: 10
  },
  title: {
    color: "black",
    fontSize: 35,
    fontWeight: 'bold',
  },
  primary_Heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10
  },
  loginContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20

  },
  buttonsContainer:{
    marginTop:12,
    display:'flex',
    flexDirection:"column",
    gap:15
  }
});

export default GetStarted