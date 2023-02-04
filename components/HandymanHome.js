import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Handyman/Home/Dashboard';
import { IconButton, Button } from 'react-native-paper';
import auth from "@react-native-firebase/auth"
const Stack = createStackNavigator();
import Antdesign from 'react-native-vector-icons/AntDesign'
import { StackActions } from '@react-navigation/native';
import NewJob from './Handyman/Jobs/NewJob';
import RecentJobs from './Handyman/Jobs/RecentJobs';


const HandymanHome = ({ navigation }) => {
  const HandleLogout = () => {
    auth().signOut()
      .then(() => {
        navigation.dispatch(
          StackActions.replace('Login')
        );
      }).catch((err) => { console.log(err) })
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Dashboard} options={{
        title: "Dashboard",
        // headerTitleAlign: "center",
        headerLeft: ()=> null,
        headerRight: () => (
          <TouchableOpacity onPress={HandleLogout} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, paddingRight: 10 }}>
            {/* <Text style={{ fontSize: 16, fontWeight: "bold" }}>Logout</Text> */}
            <Button
              icon={() => (<Antdesign name='logout' size={20} color='white' />)}
              color='white'
              buttonColor='#5e48db'
              textColor='white'
              style={{ backgroundColor: "#5e48db" }}

            >Logout</Button>
            {/*  */}
          </TouchableOpacity>
        ),
        headerStyle: {

          backgroundColor: "#e7edf7",
          height: 70,
        },
        headerTitleStyle:{
          fontSize:25,
          fontWeight:"bold"
        },
      }} />

      <Stack.Screen name="NewJobs" component={NewJob} options={{
        title: "Jobs",
        // headerTitleAlign: "center",
        headerLeft: ()=> null,
        headerRight: () => (
          <TouchableOpacity onPress={HandleLogout} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, paddingRight: 10 }}>
            {/* <Text style={{ fontSize: 16, fontWeight: "bold" }}>Logout</Text> */}
            <Button
              icon={() => (<Antdesign name='logout' size={20} color='white' />)}
              color='white'
              buttonColor='#5e48db'
              textColor='white'
              style={{ backgroundColor: "#5e48db" }}

            >Logout</Button>
            {/*  */}
          </TouchableOpacity>
        ),
        headerTitleStyle:{
          fontSize:25,
          fontWeight:"bold"
        },
        headerStyle: {

          backgroundColor: "#e7edf7",
          height: 70,
          
        }
      }} />

       <Stack.Screen name="RecentJobs" component={RecentJobs} options={{
        title: "Recent Jobs",
        // headerTitleAlign: "center",
        headerLeft: ()=> null,
        headerRight: () => (
          <TouchableOpacity onPress={HandleLogout} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, paddingRight: 10 }}>
            {/* <Text style={{ fontSize: 16, fontWeight: "bold" }}>Logout</Text> */}
            <Button
              icon={() => (<Antdesign name='logout' size={20} color='white' />)}
              color='white'
              buttonColor='#5e48db'
              textColor='white'
              style={{ backgroundColor: "#5e48db" }}

            >Logout</Button>
            {/*  */}
          </TouchableOpacity>
        ),
        headerTitleStyle:{
          fontSize:25,
          fontWeight:"bold"
        },
        headerStyle: {

          backgroundColor: "#e7edf7",
          height: 70,
          
        }
      }} />

    </Stack.Navigator>
  );
}

export default HandymanHome