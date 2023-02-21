import { View, Text, ScrollView, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import HomeBox from './HomeBox'
import FeatureBox from './FeatureBox'
import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { useIsFocused } from '@react-navigation/native'
const Dashboard = ({navigation}) => {
  const isFocus = useIsFocused();
  const [updated, setUpdated] = useState(false)
  useEffect(()=>{
    
    getOngoing();
    getPendings();
    getCompleted();
  }, [updated, isFocus])
  const changeFocus = ()=>{
    setUpdated(!updated)
  }
  const [ongoingCount, setOngoingCount] = useState('-')
  const [pendingCount, setPendingCount] = useState('-')
  const [completedCount, setCompletedCount] = useState('-')
  const getOngoing = ()=>{
    let counted = 0;
    firestore()
      .collection('Accepted')
      .get()
      .then((queryData) => {
        queryData.forEach((doc) => {
          const { acceptedPost } = doc.data();
          if(acceptedPost.handymanID === auth().currentUser.uid){
            counted ++;
          }
        })
        setOngoingCount(counted)
      }).catch((err) => {
        console.log(err)
        
      })
  }
  const getPendings = ()=>{
    let counted = 0;
    firestore()
      .collection('Pendings')
      .get()
      .then((queryData) => {
        queryData.forEach((doc) => {
          const { handymanID } = doc.data();
          if(handymanID === auth().currentUser.uid){
            counted ++;
          }
        })
        setPendingCount(counted)
      }).catch((err) => {
        console.log(err)
        

      })
  }
  const getCompleted = ()=>{
    let counted = 0;
    firestore()
      .collection('Recent')
      .get()
      .then((queryData) => {
        queryData.forEach((doc) => {
          const { job } = doc.data();
          if(job.JobDone.handymanID === auth().currentUser.uid){
            counted++
          }
        })
        setCompletedCount(counted)
        
      }).catch((err) => {
        console.log(err)
        

      })
  }
  return (
    <ScrollView>
    <View style={{ backgroundColor: '#e7edf7' }}>
      <Navigation changeFocus={changeFocus} navigation={navigation} />
      <View style={{ paddingVertical: 20, backgroundColor: "#5e48db", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <View style={{ display: "flex", paddingHorizontal: 15, flexDirection: 'row', justifyContent: "space-around", paddingBottom: 15 }}>
          <HomeBox number={completedCount} para1="Completed" para2={'Jobs'} />
          <HomeBox number={pendingCount} para1="  Pending  " para2={'Jobs'} />
          <HomeBox number={ongoingCount} para1="  Ongoing  " para2={'Jobs'} />
        </View>


      </View>
      <View style={{ backgroundColor: '#5e48db', }}>
          <View style={{ backgroundColor: "white", display: "flex", gap: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20 }}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
              <TouchableOpacity onPress={()=>{navigation.navigate('NewJobs')}}>
                <FeatureBox name='Jobs' Icon={MaterialComm} iconname='hammer-wrench' />
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>{navigation.navigate('ongoing')}}>
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