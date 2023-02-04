import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeBox from './HomeBox'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import firestore from '@react-native-firebase/firestore'
import { useIsFocused } from '@react-navigation/native'

const Home = ({ navigation, }) => {
  const isFocus = useIsFocused();
  useEffect(() => {
    getHandymans();
}, [isFocus])
const [count, setCount] = useState(0)
const [loading, setLoading] = useState(false)
const getHandymans = () => {
    setLoading(true);
    setCount(0);
    let counted = 0;
    firestore()
        .collection('posts')
        .get()
        .then((queryData) => {
            queryData.forEach((doc) => {

                counted++;
            })
            setCount(counted);
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)

        })
}
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, borderTopWidth: 1, borderColor: 'lightgray' }}>

        <View style={{ disple: 'flex', gap: 10, marginTop: 30 }}>
          <HomeBox navigation={navigation} id="Posts" Icon={Icon} bgcolor='#4e75ec' iconname='post-outline' heading="Total Posts" loading={loading} count={count} />
          <HomeBox navigation={navigation} id="Active Posts" Icon={Icon} bgcolor='#f8c42a' iconname="face-man-outline" heading="Active Posts" loading={loading} count={count} />
          <HomeBox navigation={navigation} id="Pendings" Icon={Icon} bgcolor='#4e75ec' iconname='post-outline' heading="Waiting for Approval" loading={loading} count={count} />
          <HomeBox navigation={navigation} id="Accepted" Icon={Icon} bgcolor='#f8c42a' iconname="face-man-outline" heading="Accepted Posts" loading={loading} count={count} />
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
    color: 'black',
    borderBottomWidth:1,
    borderBottomColor:'lightgray',
  },
})

export default Home