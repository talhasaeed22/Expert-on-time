import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Avatar, TextInput, Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth'
import { StackActions } from '@react-navigation/native';
const GetStarted = ({ navigation }) => {
    const routeChange = () => {
        if (auth().currentUser) {
            if (auth().currentUser.email === 'admin@firebase.com') {
                navigation.dispatch(
                    StackActions.replace('AdminHome')
                );
            }else{
                navigation.dispatch(
                    StackActions.replace('HandymanHome')
                );
            }
        } else {
            navigation.navigate('Login')
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>

                <Image resizeMode='center' style={{ height: 60, }} source={require('../images/Logo1.jpeg')} size={100} />
                {/* <Text style={styles.title}>Expert on Time</Text> */}
                <Text>EST 2021</Text>

            </View>

            <View style={styles.lowerContainer}>
                <Text style={styles.primary_Heading}>Welcome to our Application Lorem ipsum dolor sit amet,</Text>
                <Text style={styles.secondary_Heading}>Get Started</Text>
                <TouchableOpacity onPress={routeChange}>
                    <FontAwesome name='arrow-alt-circle-right' size={60} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor:'white'
    },
    upperContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white"
    }, title: {
        color: "black",
        fontSize: 35,
        fontWeight: 'bold',
    },
    primary_Heading: {
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10
    },
    secondary_Heading: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    lowerContainer: {
        padding: 40,
        backgroundColor: '#6b6b6b',
        display: 'flex',
        color: "white",
        gap: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center'
    }
})

export default GetStarted