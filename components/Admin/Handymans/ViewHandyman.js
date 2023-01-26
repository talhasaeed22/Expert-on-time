import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'
import HandymanBox from './HandymanBox'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeBox from '../Home/HomeBox'

const ViewHandyman = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = () => {
    const Data = [];
    setLoading(true)
    firestore()
      .collection('handymans')
      .get()
      .then((queryData) => {
        queryData.forEach((doc) => {
          const { name, email, password, phone, category } = doc.data();

          Data.push({
            name: name,
            email: email,
            password: password,
            phone: phone,
            category: category
          })

        })
        setList(Data)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
        setLoading(false)

      })
  }
  return (
    <>
      <View style={{padding:20, paddingBottom:5}}>
        <Text style={{fontSize:22, fontWeight:'bold', }}>Handymans Details</Text>
      </View>
      <View style={{padding:20}}>
        <HomeBox Icon={Icon} bgcolor='#f8c42a' iconname="face-man-outline" heading="Total Handymans" />
      </View>
      <ScrollView>
        {loading ? <ActivityIndicator /> : list.map((element, index) => {
          return <HandymanBox element={element} index={index} />
        })}
        <View style={{ paddingTop: 100 }}></View>
      </ScrollView>
    </>
  )
}

export default ViewHandyman