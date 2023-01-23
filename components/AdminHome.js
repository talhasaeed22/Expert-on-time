import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import { Avatar, TextInput, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyDrawer from './MyDrawer';
import Jobs from './Jobs';

const AdminHome = () => {
 
  const Drawer = createDrawerNavigator();
  return (
    
        <Drawer.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor:'white',
        },
      }}
        
         drawerContent={props => <MyDrawer {...props} />}>

          <Drawer.Screen name="Home" component={Jobs} options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
          }} />

          <Drawer.Screen name="Posts" component={Jobs} options={{
            title: 'Medium Share',
            headerShown: true,
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#181c3f' ,
            },

          }} />
          <Drawer.Screen name="Jobs" component={Jobs} options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
          }} />
          <Drawer.Screen name="Handymans" component={Jobs} options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
            headerTintColor: 'white',
          }} />
          <Drawer.Screen name="Settings" component={Jobs} options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
            headerTintColor: 'white',
          }} />
        </Drawer.Navigator>
     
  )
}

export default AdminHome