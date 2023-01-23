import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar, TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCred)=>{
            Alert.alert('login Successfully');
        })
        .catch((error)=>{
            if (error.code === 'auth/invalid-email') {
                Alert.alert(
                    'Warning',
                    'That email address is invalid!'
                );
            } else if (error.code === 'auth/wrong-password') {
                Alert.alert(
                    'Warning',
                    'The Password is invalid!'
                );
            }else if(error.code === 'auth/user-not-found'){
                Alert.alert(
                    'Warning',
                    'Please Enter Valid Credentials'
                );
            }
        })
    }
    return (
        <>

            <View style={{ display: "flex", flexDirection: 'column', flex: 1, backgroundColor: 'yellow', justifyContent: 'space-between' }}>
                <ScrollView>
                <View style={styles.container}>
                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar.Image size={64} source={require('../images/logo.jpg')} />
                        <Text style={styles.title}>Expert on Time</Text>
                        <Text>EST 2021</Text>
                    </View>
                    <View>
                        <Text style={styles.primary_Heading}>Login</Text>
                    </View>

                    <View style={styles.loginContainer}>
                        <View style={{ padding: 20 }}>
                            <Text>Let's Login To Your Account</Text>
                            <View style={{ display: "flex", flexDirection: 'column', gap: 3, marginTop: 20 }}>
                                <TextInput value={email} onChangeText={setEmail} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', background: 'transparent' } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Email' mode='flat' />
                                <TextInput onChangeText={setPassword} secureTextEntry value={password} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', background: 'transparent' } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5' }} label='Password' mode='flat' />
                            </View>
                        </View>
                    </View>
                </View>
                </ScrollView>

                <View style={styles.buttonsContainer}>
                    <Text style={{ color: 'white', textAlign: 'center', fontStyle: "italic", fontSize: 17 }}>Welcome to our Application</Text>
                    <TouchableOpacity onPress={handleLogin}>
                        <Button style={{ height: 50, alignItems: 'center', justifyContent: "center" }} textColor="black" labelStyle={{ fontSize: 20 }} buttonColor='white' icon="login" mode="contained" >
                            Login
                        </Button>
                    </TouchableOpacity>

                    {/* 
            <Button style={{height:50, alignItems:'center', justifyContent:"center", marginTop:20}} labelStyle={{fontSize:20}} buttonColor='black' icon="google" mode="contained" onPress={() => console.log('Pressed')}>
              Signup with google
            </Button> */}
                </View>
            </View>


        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        display: 'flex',
        // justifyContent: 'center',
        // backgroundColor: 'yellow',
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
        marginTop: 40

    },
    buttonsContainer: {

        display: 'flex',
        flexDirection: "column",
        gap: 35,
        // justifyContent: 'center',
        backgroundColor: 'black',
        padding: 40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 70

    }
});

export default Login