import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './components/Login';
import AdminHome from './components/AdminHome';
import GetStarted from './components/GetStarted';
import HandymanHome from './components/HandymanHome';



function App() {
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator>
      <Stack.Screen options={{
                title: '', headerShown:false
            }} name="Start" component={GetStarted} />
        <Stack.Screen options={{
                title: '', headerShown:false
            }} name="Login" component={Login} />
        <Stack.Screen options={{
                title: '', headerShown:false
            }} name="AdminHome" component={AdminHome} />
            <Stack.Screen options={{
                title: '', headerShown:false
            }} name="HandymanHome" component={HandymanHome} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;