import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Navigation from '../Navigation'
import HomeBox from './HomeBox'
import FeatureBox from './FeatureBox'
import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Dashboard = () => {
  return (
    <ScrollView>
    <View style={{ backgroundColor: '#e7edf7' }}>
      <Navigation />
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
              <View>
                <FeatureBox name='Jobs' Icon={MaterialComm} iconname='hammer-wrench' />
              </View>
              <View>
                <FeatureBox name='Profile' Icon={FontAwesome} iconname='user-circle' />
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
              <View>
                <FeatureBox name='Recent' Icon={MaterialComm} iconname='post-outline' />
              </View>
              <View>
                <FeatureBox name='Jobs' Icon={MaterialComm} iconname='hammer-wrench' />
              </View>
            </View>
            
          </View>
      </View>
    </View>
        </ScrollView>
  )
}

export default Dashboard