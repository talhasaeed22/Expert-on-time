import { View, Text, ScrollView, ActivityIndicator, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeBox from '../Home/HomeBox'
import Navigation from '../Navigation'
import { useIsFocused } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import OngoingBox from './OngoingBox';

const Ongoing = ({navigation}) => {
    const isFocused = useIsFocused();

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false)
  const changeFocus = () => {
    setUpdate(!update)
  }
  useEffect(() => {
    getAccepted();
  }, [isFocused, update])
  const getAccepted = () => {
    const Data = [];
    setLoading(true)
    firestore()
      .collection('Accepted')
      .get()
      .then((queryData) => {
        queryData.forEach((doc) => {
          const { acceptedPost } = doc.data();
          Data.push({
            id:doc.id,
            acceptedJobs:acceptedPost
          })
        })

        setList(Data)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
        setLoading(false)

      })
  }

  const FinishJob = (job, key)=>{
    console.log(key)
    firestore()
        .collection('Recent')
        .add({
            JobDone:job.acceptedJobs
        }).then(()=>{
            firestore().collection('Accepted').doc(key)
            .delete()
            .then(() => {
                setUpdate(!update)
                firestore().collection('posts').doc(job.acceptedJobs.post.id)
                .update({
                  status:"Finished"
                })
                Alert.alert('Job Finished')
            })
        }).catch((err)=>{
            console.log(err)
        })
  }
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#e7edf7' }}>
        <Navigation changeFocus={changeFocus} navigation={navigation} />
        <View style={{ paddingVertical: 20, backgroundColor: "#5e48db", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-around", }}>
            <Text style={{ color: "white", fontSize: 25, fontWeight: 'bold' }}>Accepted Jobs</Text>
            {/* <HomeBox /> */}
          </View>


        </View>
        <View style={{ backgroundColor: '#5e48db', }}>
          <View style={{ backgroundColor: "white", display: "flex", gap: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, }}>
            {loading ? <ActivityIndicator /> : (list.length !== 0 ? list.map((element, index) => {
              return <OngoingBox FinishJob={FinishJob} key={index} element={element} index={index} />
            }) :
              <View style={{ display: "flex", alignItems: "center", marginTop: 30, }}>
                <Icon name='folder-text-outline' size={35} color='black' />
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>No Jobs</Text>
              </View>)}
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default Ongoing