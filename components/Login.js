import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, ActivityIndicator, Keyboard, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';
import Messagemodal from './Messagemodal';


const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const CloseModal = () => {
        setModalVisible(false);
    }
    const handleLogin = () => {
        if (email === '' || password === '') {

            setTitle('Warning')
            setMessage('Please fill all the required Fields!')
            setModalVisible(true);

        } else {
            Keyboard.dismiss();
            setEmail(email.toLowerCase())
            setLoading(true);
            auth()
                .signInWithEmailAndPassword(email, password)
                .then((userCred) => {
                    setLoading(false)
                    if (email === 'Admin@firebase.com' || email === 'admin@firebase.com') {
                        navigation.dispatch(
                            StackActions.replace('AdminHome')
                        );
                    } else {
                        navigation.dispatch(
                            StackActions.replace('HandymanHome')
                        );
                    }
                })
                .catch((error) => {
                    setLoading(false)

                    if (error.code === 'auth/invalid-email') {
                        setTitle('Warning')
                        setMessage('That email address is invalid!')
                        setModalVisible(true);

                    } else if (error.code === 'auth/wrong-password') {
                        setTitle('Warning')
                        setMessage('The Password is invalid!')
                        setModalVisible(true);
                        
                    } else if (error.code === 'auth/user-not-found') {
                        setTitle('Warning')
                        setMessage('Please Enter Valid Credentials!')
                        setModalVisible(true);
                     
                    }
                })
        }
    }
    return (
        <>

            <View style={{ display: "flex", flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Image resizeMode='center' style={{ height: 60, }} source={require('../images/mainlogo.jpeg')} size={100} />
                            {/* <Text style={styles.title}>Expert on Time</Text> */}
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
                        {loading ? <ActivityIndicator color={'white'} size='large' /> : <Button style={{ height: 50, alignItems: 'center', justifyContent: "center" }} textColor="black" labelStyle={{ fontSize: 20 }} buttonColor='white' icon="login" mode="contained" >
                            Login
                        </Button>}
                    </TouchableOpacity>

                    {/* 
            <Button style={{height:50, alignItems:'center', justifyContent:"center", marginTop:20}} labelStyle={{fontSize:20}} buttonColor='black' icon="google" mode="contained" onPress={() => console.log('Pressed')}>
              Signup with google
            </Button> */}
                </View>
                <Messagemodal title={title} modalVisible={modalVisible} CloseModal={CloseModal} message={message} />

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
        paddingTop: 0,
        gap: 10,
        marginTop: 30
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
        paddingTop: 10,
        color: 'black'
    },
    loginContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    },
    buttonsContainer: {

        display: 'flex',
        flexDirection: "column",
        gap: 15,
        // justifyContent: 'center',
        backgroundColor: '#6b6b6b',
        padding: 40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // paddingBottom: 70

    }
});

export default Login