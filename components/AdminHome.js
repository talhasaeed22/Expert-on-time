import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyDrawer from './MyDrawer';
import Home from './Admin/Home/Home';
import PostHome from './Admin/Posts/PostHome';
import HomeHandyman from './Admin/Handymans/HomeHandyman';
import ActiveOrders from './Admin/Orders/ActiveOrders';
import RecentOrdersPage from './Admin/Recent/RecentOrdersPage';
import PendingRequest from './Admin/Pendings/PendingRequests'
import Stats from './Admin/Stats/Stats';
import JobDone from './Admin/Recent/JobDone';
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
          <Drawer.Screen name="ActiveOrders" component={ActiveOrders} options={{
            title: 'Active Jobs',
            headerShown: true,
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#6b6b6b' ,
            },
          }} />
          <Drawer.Screen name="Handymans" component={HomeHandyman} options={{
            title: 'Handymans',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#6b6b6b' ,
            },
          }} />
          <Drawer.Screen name="RecentJobs" component={RecentOrdersPage} options={{
            title: 'Recent Orders',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#6b6b6b' ,
            },
          }} />
          <Drawer.Screen name="PendingRequests" component={PendingRequest} options={{
            title: 'Waiting for Approval',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#6b6b6b' ,
            },
          }} />
          <Drawer.Screen name="stats" component={Stats} options={{
            title: 'Stats',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#6b6b6b' ,
            },
          }} />
          <Drawer.Screen name="status" component={JobDone} options={{
            title: 'Jobs Status',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#6b6b6b' ,
            },
          }} />
        </Drawer.Navigator>
     
  )
}

export default AdminHome