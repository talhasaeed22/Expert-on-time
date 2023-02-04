import { View, Text, ScrollView, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import HomeBox from './HomeBox'
import FeatureBox from './FeatureBox'
import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
const Dashboard = ({navigation}) => {
  const [updated, setUpdated] = useState(false)
  useEffect(()=>{
    navigation.navigate('Home')
  }, [updated])
  const changeFocus = ()=>{
    setUpdated(!updated)
  }
  return (
    <ScrollView>
    <View style={{ backgroundColor: '#e7edf7' }}>
      <Navigation changeFocus={changeFocus} navigation={navigation} />
      <View style={{ paddingVertical: 20, backgroundColor: "#5e48db", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <View style={{ display: "flex", paddingHorizontal: 15, flexDirection: 'row', justifyContent: "space-around", paddingBottom: 15 }}>
          <HomeBox number={23} para1="Completed" para2={'Jobs'} />
          <HomeBox number={12} para1="New Posts" para2={'View'} />
          {/* <HomeBox /> */}
        </View>


      </View>
      <View style={{ backgroundColor: '#5e48db', }}>
          <View style={{ backgroundColor: "white", display: "flex", gap: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20 }}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
              <TouchableOpacity onPress={()=>{navigation.navigate('NewJobs')}}>
                <FeatureBox name='Jobs' Icon={MaterialComm} iconname='hammer-wrench' />
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>{Alert.alert("Functionality Comming Soon")}}>
                <FeatureBox name='ongoing' Icon={MaterialComm} iconname='clock-check-outline' />
              </TouchableOpacity>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
              <TouchableOpacity  onPress={()=>{navigation.navigate('RecentJobs')}}>
                <FeatureBox name='Recent' Icon={MaterialComm} iconname='post-outline' />
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>{navigation.navigate('Pendings')}}>
                <FeatureBox name='Pending' Icon={Entypo} iconname='hour-glass' />
              </TouchableOpacity>
            </View>
            
          </View>
      </View>
    </View>
        </ScrollView>
  )
}

export default Dashboard