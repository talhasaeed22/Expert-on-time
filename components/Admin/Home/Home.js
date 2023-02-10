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
    
    getPosts();
    getPendings();
    getOrders();
    getAccepted();
    
  }, [isFocus])
  const [postCount, setpostCount] = useState('-')
  const [pendingCount, setpendingCount] = useState('-')
  const [activeCount, setActiveCount] = useState('-')
  const [recentPost, setRecentPost] = useState('-')
  const [loading, setLoading] = useState(false)
  const getPosts = () => {
    setLoading(true);
    setpostCount('-');
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

    setpendingCount('-');
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
  const getOrders = () => {

    setRecentPost('-');
    let counted = 0;
    firestore()
      .collection('Recent')
      .get()
      .then((queryData) => {
        queryData.forEach((doc) => {

          counted++;
        })
        setRecentPost(counted);

      }).catch((err) => {
        console.log(err)


      })
  }

  const getAccepted = ()=>{
    setActiveCount('-');
    let counted = 0;
    firestore()
      .collection('Accepted')
      .get()
      .then((queryData) => {
        queryData.forEach((doc) => {

          counted++;
        })
        setActiveCount(counted);

      }).catch((err) => {
        console.log(err)


      })
      setLoading(false)
  }
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, borderTopWidth: 1, borderColor: 'lightgray' }}>

        <View style={{ disple: 'flex', gap: 10, marginTop: 30 }}>
          <HomeBox navigation={navigation} id="Posts" Icon={Icon} bgcolor='#4e75ec' iconname='post-outline' heading="Total Posts" loading={loading} count={postCount} />

          <HomeBox navigation={navigation} id="Active Posts" Icon={Icon} bgcolor='#f8c42a' iconname="face-man-outline" heading="Active Posts" loading={loading} count={activeCount} />

          <HomeBox navigation={navigation} id="Pendings" Icon={Entypo} bgcolor='#4e75ec' iconname='hour-glass' heading="Waiting for Approval" loading={loading} count={pendingCount} />
          <HomeBox navigation={navigation} id="Recent" Icon={Icon} bgcolor='#f8c42a' iconname="face-man-outline" heading="Orders Completed" loading={loading} count={recentPost} />
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