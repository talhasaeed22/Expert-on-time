import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import { Avatar, TextInput, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyDrawer from './MyDrawer';
import Jobs from './Admin/Home/Jobs';
import Home from './Admin/Home/Home';
import PostHome from './Admin/Posts/PostHome';
import HomeHandyman from './Admin/Handymans/HomeHandyman';

const AdminHome = () => {
 
  const Drawer = createDrawerNavigator();
  return (
    
        <Drawer.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor:'white',
        },
      }}
        
         drawerContent={props => <MyDrawer {...props} />}>

          <Drawer.Screen name="Home" component={Home} options={{
            title: 'Admin Pannel',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleAlign:'center',
            
            // headerTransparent: true,
          }} />

          <Drawer.Screen name="Posts" component={PostHome} options={{
            title: 'Posts',
            headerShown: true,
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#6b6b6b' ,
            },

          }} />
          <Drawer.Screen name="Jobs" component={Jobs} options={{
            title: '',
            headerShown: true,
            headerTransparent: true,
          }} />
          <Drawer.Screen name="Handymans" component={HomeHandyman} options={{
            title: 'Handymans',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#6b6b6b' ,
            },
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