import { View, Text, ScrollView, ActivityIndicator, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-native-paper'
import { useIsFocused } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const JobDone = () => {
  const isFocus = useIsFocused();
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0)
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    getFinished();
  }, [isFocus, update])

  const getFinished = () => {
    const Data = [];
    setLoading(true)
    let counted = 0;
    firestore()
      .collection('Finished')
      .get()
      .then((querryData) => {
        querryData.forEach((doc) => {
          const { JobDone, date, month, year, beforeWork, afterWork, acceptedId } = doc.data();
          Data.push({
            id: doc.id,
            acceptedId:acceptedId,
            JobDone: JobDone,
            date: date,
            year: year,
            month: month,
            beforeWork: beforeWork,
            afterWork: afterWork
          })
          counted++
        })
        setList(Data)
        setLoading(false)
        setCount(counted)
      }).catch((err) => {
        console.log(err)
        setLoading(false)

      })
  }
  const acceptJob = async (job, key) => {
    setLoading(true);
    const date = new Date();

    firestore()
      .collection('Recent')
      .add({
        job
      }).then(() => {
        firestore().collection('Finished').doc(key)
          .delete()
          .then(() => {
            setUpdate(!update)
            firestore().collection('posts').doc(job.JobDone.post.id)
              .update({
                status: "Finished"
              })
            setLoading(false);

            Alert.alert('Success', 'Job Finished')
          })
      }).catch((err) => {
        setLoading(false);
        console.log(err)
      })
  }

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <ScrollView>


        <View style={{ marginTop: 20, padding: 10 }}>
          <Text style={styles.primaryHeading}>Finished Jobs</Text>
        </View>
        {loading ? <ActivityIndicator /> : (list.length !== 0 ? list.map((element, index) => {
          return <View key={index}>

            <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
              <View style={styles.box} >
                <View style={{ display: "flex", flexDirection: 'column', gap: 10, }}>


                  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Email</Text>

                    <Text style={{ fontSize: 15 }}>{element.JobDone.post.email}</Text>
                  </View>

                  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Phone Number</Text>

                    <Text style={{ fontSize: 15 }}>{element.JobDone.post.phone}</Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Address</Text>

                    <Text style={{ fontSize: 15 }}>{element.JobDone.post.address}</Text>
                  </View>

                </View>

                <View style={{ display: "flex", flexDirection: 'column', gap: 10, }}>
                  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Payment</Text>

                    <Text style={{ fontSize: 15 }}>{element.JobDone.post.budget}</Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Client Name</Text>

                    <Text style={{ fontSize: 15 }}>{element.JobDone.post.name}</Text>
                  </View>




                  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Category</Text>
                    <Text style={{ fontSize: 17, color: 'red', fontWeight: 'bold' }}>{element.JobDone.post.category}</Text>

                  </View>

                </View>

              </View>
              <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Job Description</Text>

                <Text style={{ fontSize: 15 }}>{element.JobDone.post.brief}</Text>
              </View>

              <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgray", paddingVertical: 10 }}></View>

              <View style={{ display: "flex", gap: 20, padding: 10, paddingHorizontal: 0 }} >
                <View style={{ display: "flex", flexDirection: 'column', gap: 10, }}>
                  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Handyman Name</Text>

                    <Text style={{ fontSize: 15 }}>{element.JobDone.handymanName}</Text>
                  </View>

                </View>

                <View style={{ display: "flex", flexDirection: 'column', gap: 10, }}>
                  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>HandyMan Email</Text>

                    <Text style={{ fontSize: 15 }}>{element.JobDone.handymanEmail}</Text>
                  </View>

                </View>
                <View style={{ display: 'flex', gap: 10, }}>
                  <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Before Work Image</Text>
                  <Image source={{ uri: element.beforeWork }} style={{ width: Dimensions.get('window').width - 50, height: 250, borderRadius: 20, alignSelf: 'center' }} resizeMode='cover' />
                </View>
                <View style={{ display: 'flex', gap: 10, }}>
                  <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>After Work Image</Text>
                  <Image source={{ uri: element.afterWork }} style={{ width: Dimensions.get('window').width - 50, height: 250, borderRadius: 20, alignSelf: 'center' }} resizeMode='cover' />
                </View>


              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <View style={{ paddingVertical: 15, display: 'flex', flexDirection: "row", gap: 10 }}>
                  <TouchableOpacity onPress={() => { acceptJob(element, element.id) }}>
                    <Button buttonColor='#03b944' labelStyle={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }} color='white' style={{ padding: 5, borderRadius: 10 }} mode="contained">
                      {'Accept'}
                    </Button>
                  </TouchableOpacity>

                </View>
              </View>
            </View>

            <View style={{borderWidth:1, borderColor:'lightgray', padding:10}}></View>
          </View>


        }) :
          <View style={{ display: "flex", alignItems: "center", marginTop: 30, flex: 1, justifyContent: "center" }}>
            <Icon name='folder-text-outline' size={35} color='black' />
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>No Pending Requests</Text>
          </View>)}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  primaryHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',

  },
  box: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 0,
    backgroundColor: 'white',
    borderRadius: 10
  }

})

export default JobDone