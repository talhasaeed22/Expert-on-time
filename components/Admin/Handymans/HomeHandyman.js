import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import AddHandyman from './AddHandyman';
import ViewHandyman from './ViewHandyman';
const HomeHandyman = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarStyle: { position:'absolute',
      bottom:30,
      backgroundColor: '#292828',
      marginHorizontal:20,
      borderRadius:10,
      shadowColor:'#000',
      shadowOpacity:0.06,
      shadowOffset:{
        width:10,
        height:10
      },
      paddingTop:7

     },
      
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'AddHandyman') {
          iconName = 'create-outline';
          color = focused ? 'white' : '#c2c2be'

        }
        else if (route.name === 'ViewHandymans') {
          iconName = 'face-man-outline';
          
          color = focused ? 'white'  : '#c2c2be'
        }
       
        // You can return any component that you like here!
        return route.name === 'AddHandyman' ? <Ionicons name={iconName} size={size} color={color} /> : <Material name={iconName} size={size} color={color} />;
      }
    })}>
      <Tab.Screen name="ViewHandymans" component={ViewHandyman}options={{
        title: '',
        headerShown: true,
        headerTransparent: true,
      }} />
        <Tab.Screen name="AddHandyman" component={AddHandyman}options={{
          title: '',
          headerShown: true,
          headerTransparent: true,
        }} />
        
        
      </Tab.Navigator>
  )
}

export default HomeHandyman
