import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import HomeBox from './HomeBox'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RecentOrders from './RecentOrders'

const Home = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, borderTopWidth:1, borderColor:'lightgray' }}>

        <View style={{ disple: 'flex', gap: 10, marginTop: 30 }}>
          <HomeBox Icon={Icon} bgcolor='#4e75ec' iconname='post-outline' heading="Total Active Orders" />
          <HomeBox Icon={Icon} bgcolor='#f8c42a' iconname="face-man-outline" heading="Total Handymans" />
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.primary_Heading}>Recent Orders</Text>
            <Text style={{ fontSize: 17, fontWeight: '800', borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>View All</Text>
          </View>
          <View style={{ display: 'flex', gap: 30, marginTop: 20 }}>
            <RecentOrders />
            <RecentOrders />
            <RecentOrders />
            <RecentOrders />

          </View>
        </View>

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  primary_Heading: {
    fontSize: 25,
    fontWeight: 'normal',
    // textAlign: 'center',
    paddingTop: 10,
    color: 'black'
  },
})

export default Home