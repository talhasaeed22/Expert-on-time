import React, { useState, useEffect, useContext } from 'react';
import { Button, Image, View, Text, Alert } from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
// import { Drawer, Avatar, Switch } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialIcons'
import FAwesome from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'
const MyDrawer = (props) => {



  const [screen, setScreen] = useState(1);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView  {...props}>
        <View style={{ marginBottom:  20 , flexDirection: 'row', alignItems: 'center', justifyContent:'center', paddingTop: 50 }}>
          {/* <Image style={{ width: 50, height: 50 }} source={require('../images/logo.png')} /> */}
          <Text style={{ fontSize: 31, color: 'rgb(191, 28, 28)', fontWeight: 'bold',}}>ploreJhelum </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: "center", padding: 15, }}>
          {/* <Avatar.Image source={{  }} size={50} /> */}
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ marginLeft: 15, fontSize: 15, color: 'black', fontWeight: 'bold' }}> Talha Saeed </Text>
            <Text style={{ marginLeft: 15, fontWeight: 'bold', color: 'gray' }}> talha@gmail.com </Text>
          </View>
        </View>
        <View style={{ marginTop: 15, flexDirection: 'column', marginLeft: 15 }}>

          <DrawerItem onPress={() => { props.navigation.navigate('Home'); setScreen(1) }} style={screen === 1 ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<Icon name="home-outline" size={21} color={screen === 1 ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: screen === 1 ? ('white') : 'black', fontSize: 15 }}>Home</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('Home'); setScreen(2) }} style={screen === 2 ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<FAwesome name="hotel" size={21} color={screen === 2 ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: screen === 2 ? ('white') : 'black', fontSize: 15 }}>Hotles</Text>)}

          />

          <DrawerItem onPress={() => { props.navigation.navigate('Home'); setScreen(3) }} style={screen === 3 ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<IonIcon name="restaurant-outline" size={21} color={screen === 3 ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: screen === 3 ? ('white') : 'black', fontSize: 15 }}>Restaurants</Text>)}

          />
           <DrawerItem onPress={() => { props.navigation.navigate('Home'); setScreen(4) }} style={screen === 4 ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<IonIcon name="school-outline" size={21} color={screen === 4 ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: screen === 4 ? ('white') : 'black', fontSize: 15 }}>Institutions</Text>)}

          />
           <DrawerItem onPress={() => { props.navigation.navigate('Home'); setScreen(5) }} style={screen === 5 ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<Material name="place" size={21} color={screen === 5 ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: screen === 5 ? ('white') : 'black', fontSize: 15 }}>Places</Text>)}

          />
          <DrawerItem onPress={() => { props.navigation.navigate('Home'); setScreen(6) }} style={screen === 6 ? { backgroundColor: '#181c3f' } : {}}
            icon={({ color, size }) => (<IonIcon name="settings-outline" size={21} color={screen === 6 ? ('white') : 'black'} />)}
            label={() => (<Text style={{ color: screen === 6 ? ('white') : 'black', fontSize: 15 }}>Settings</Text>)}

          />

        </View>

        <View style={{ borderTopWidth: 1, marginTop: 15, borderTopColor: 'lightgray' }}></View>
        <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* <Text style={{ fontSize: 15, color:'white' }}> {mode === 'dark' ? 'Light Mode' : 'Dark Mode'} </Text> */}
          <View style={{ borderRadius: 145 }} >

            {/* <Switch color={'#181c3f' } value={mode} onValueChange={handleMode} /> */}
          </View>
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
        <DrawerItem onPress={() => { props.navigation.navigate('Home'); setScreen(1) }}
          icon={({ color, size }) => (<Icon name="login" size={21} color={'black'} />)}
          label={() => (<Text style={{ fontSize: 15 }}>Login</Text>)}

        />
      
    </View>
  )
}

export default MyDrawer;
