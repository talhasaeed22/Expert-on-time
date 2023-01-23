import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from './components/MyDrawer';
import Home from './components/Home';
import GetStarted from './components/GetStarted';


const Drawer = createDrawerNavigator();

function App() {
  return (
    <GetStarted/>
    // <NavigationContainer>
    //     <Drawer.Navigator screenOptions={{
    //     drawerStyle: {
    //       backgroundColor:'white',
    //     },
    //   }}
        
    //      drawerContent={props => <MyDrawer {...props} />}>

    //       <Drawer.Screen name="Home" component={Home} options={{
    //         title: '',
    //         headerShown: true,
    //         headerTransparent: true,
    //       }} />

    //       <Drawer.Screen name="Hotels" component={Home} options={{
    //         title: 'Medium Share',
    //         headerShown: true,
    //         headerTintColor: 'white',
    //         headerTitleAlign: 'center',
    //         headerStyle: {
    //           backgroundColor: '#181c3f' ,
    //         },

    //       }} />
    //       <Drawer.Screen name="Restaurants" component={Home} options={{
    //         title: '',
    //         headerShown: true,
    //         headerTransparent: true,
    //       }} />
    //       <Drawer.Screen name="Institutions" component={Home} options={{
    //         title: '',
    //         headerShown: true,
    //         headerTransparent: true,
    //         headerTintColor: 'white',
    //       }} />
    //       <Drawer.Screen name="Trip Places" component={Home} options={{
    //         title: '',
    //         headerShown: true,
    //         headerTransparent: true,
    //         headerTintColor: 'white',
    //       }} />
    //     </Drawer.Navigator>
    //   </NavigationContainer>
  );
}

export default App;