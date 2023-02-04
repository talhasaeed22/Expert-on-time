import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeBox from './HomeBox'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import firestore from '@react-native-firebase/firestore'
import { useIsFocused } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'

const Home = ({ navigation, }) => {
  const isFocus = useIsFocused();
  useEffect(() => {
    setLoading(true);
    getPosts();
    getPendings();
    setLoading(false)
  }, [isFocus])
  const [postCount, setpostCount] = useState(0)
  const [pendingCount, setpendingCount] = useState(0)
  const [activeCount, setActiveCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const getPosts = () => {

    setpostCount(0);
    let counted = 0;
    firestore()
      .collection('posts')
      .get()
      .then((queryData) => {
        queryData.forEach((doc) => {

          counted++;
        })
        setpostCount(counted);

      }).catch((err) => {
        console.log(err)


      })
  }
  const getPendings = () => {

    setpendingCount(0);
    let counted = 0;
    firestore()
      .collection('Pendings')
      .get()
      .then((queryData) => {
        queryData.forEach((doc) => {

          counted++;
        })
        setpendingCount(counted);

      }).catch((err) => {
        console.log(err)


      })
  }
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, borderTopWidth: 1, borderColor: 'lightgray' }}>

        <View style={{ disple: 'flex', gap: 10, marginTop: 30 }}>
          <HomeBox navigation={navigation} id="Posts" Icon={Icon} bgcolor='#4e75ec' iconname='post-outline' heading="Total Posts" loading={loading} count={postCount} />
          <HomeBox navigation={navigation} id="Active Posts" Icon={Icon} bgcolor='#f8c42a' iconname="face-man-outline" heading="Active Posts" loading={loading} count={postCount} />
          <HomeBox navigation={navigation} id="Pendings" Icon={Entypo} bgcolor='#4e75ec' iconname='hour-glass' heading="Waiting for Approval" loading={loading} count={pendingCount} />
          <HomeBox navigation={navigation} id="Accepted" Icon={Icon} bgcolor='#f8c42a' iconname="face-man-outline" heading="Accepted Posts" loading={loading} count={pendingCount} />
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
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
})

export default Home