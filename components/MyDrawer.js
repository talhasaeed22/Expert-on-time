import React, { useState, useEffect, useContext } from 'react';
import { Button, Image, View, Text, Alert, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth'
import { Avatar } from 'react-native-paper';
import { StackActions } from '@react-navigation/native';

import {
  DrawerContentScrollView,
  DrawerItem,

} from '@react-navigation/drawer';
// import { Drawer, Avatar, Switch } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialIcons'
import FAwesome from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeBox from './Admin/Home/HomeBox';

const MyDrawer = (props) => {

  const { state } = props
  const { routes, index } = state; //Not sure about the name of index property. Do check it out by logging the 'state' variable.
  const focusedRoute = routes[index].name;

  const handleLogout = () => {
    auth().signOut().then(() => {
      
        props.navigation.dispatch(
          StackActions.replace('Login')
      );
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView  {...props}>
        <View style={{ marginBottom: 20, paddingTop: 40, display: 'flex', alignItems: "center" }}>
          <Image resizeMode='center' style={{ height: 60, }} source={require('../images/Logo1.jpeg')} size={100} />

          {/* <Text style={{ fontSize: 31, color: 'black', fontWeight: 'bold',}}>Expert on Time </Text> */}
        </View>
        <View style={{ flexDirection: 'row', alignItems: "center", padding: 15, }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ marginLeft: 15, fontSize: 15, color: 'black', fontWeight: 'bold' }}> Admin Pannel </Text>
            <Text style={{ marginLeft: 15, fontWeight: 'bold', color: 'gray' }}> {auth().currentUser && auth().currentUser.email} </Text>
          </View>
        </View>
        <View style={{ borderTopWidth: 1, marginBottom: 15, borderTopColor: 'lightgray' }}></View>

        <View style={{ marginTop: 15, flexDirection: 'column', marginLeft: 10 }}>

          <DrawerItem onPress={() => { props.navigation.navigate('Home'); }} style={focusedRoute === 'Home' ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<Icon name="home-outline" size={21} color={focusedRoute === 'Home' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'Home' ? ('white') : 'black', fontSize: 15 }}>Home</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('Posts'); }} style={focusedRoute === 'Posts' ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<Icon name="post-outline" size={21} color={focusedRoute === 'Posts' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'Posts' ? ('white') : 'black', fontSize: 15 }}>Posts</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('Handymans'); }} style={focusedRoute === 'Handymans' ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<Icon name="face-man-outline" size={21} color={focusedRoute === 'Handymans' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'Handymans' ? ('white') : 'black', fontSize: 15 }}>Handyman</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('ActiveOrders'); }} style={focusedRoute === 'ActiveOrders' ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<Icon name="hammer-wrench" size={21} color={focusedRoute === 'ActiveOrders' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'ActiveOrders' ? ('white') : 'black', fontSize: 15 }}>Active Jobs</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('status'); }} style={focusedRoute === 'status' ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<Entypo name="check" size={21} color={focusedRoute === 'status' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'status' ? ('white') : 'black', fontSize: 15 }}>Job Status</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('RecentJobs'); }} style={focusedRoute === 'RecentJobs' ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<Icon name="clock-check-outline" size={21} color={focusedRoute === 'RecentJobs' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'RecentJobs' ? ('white') : 'black', fontSize: 15 }}>Recent Orders</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('PendingRequests'); }} style={focusedRoute === 'PendingRequests' ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<Entypo name="hour-glass" size={21} color={focusedRoute === 'PendingRequests' ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: focusedRoute === 'PendingRequests' ? ('white') : 'black', fontSize: 15 }}>Pending Requests</Text>)}

          />


        </View>

        <View style={{ borderTopWidth: 1, marginBottom: 15, borderTopColor: 'lightgray' }}></View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10, }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Stats</Text>
          <TouchableOpacity onPress={() => { props.navigation.navigate('stats') }} style={{ marginTop: 15, padding: 20, borderRadius: 9, borderWidth:2, borderColor:'orange', backgroundColor: '#181c3f', display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
            <View style={{ display: 'flex' }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Stats</Text>
              <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 20 }}>Profit</Text>

            </View>
            <View>
              <Image resizeMode='center' style={{ width: 70, height: 70 }} source={require('../images/dollar.png')} />
            </View>
          </TouchableOpacity>
        </View>


      </DrawerContentScrollView>

      <View style={{ borderTopWidth: 1, borderTopColor: 'lightgray' }}></View>
      {/* {!auth().currentUser ? <DrawerItem onPress={() => { props.navigation.navigate('Login'); setScreen(1) }}
          icon={({ color, size }) => (<Icon name="login" size={21} color={'black'} />)}
          label={() => (<Text style={{ fontSize: 15 }}>Login</Text>)}

        /> : <DrawerItem onPress={handleSignout}
          icon={({ color, size }) => (<Icon name="login" size={21} color={'black'} />)}
          label={() => (<Text style={{ fontSize: 15, color: mode === 'light' ? 'gray' : 'white' }}>Signout</Text>)}

        />} */}
      <DrawerItem onPress={handleLogout}
        icon={({ color, size }) => (<Icon name="login" size={21} color={'black'} />)}
        label={() => (<Text style={{ fontSize: 15 }}>Logout</Text>)}

      />

    </View>
  )
}

export default MyDrawer;
