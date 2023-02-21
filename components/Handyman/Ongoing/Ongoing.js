import { View, Text, ScrollView, ActivityIndicator, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeBox from '../Home/HomeBox'
import Navigation from '../Navigation'
import { useIsFocused } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import OngoingBox from './OngoingBox';
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'
const Ongoing = ({ navigation }) => {
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
          if (acceptedPost.handymanID === auth().currentUser.uid) {
            Data.push({
              id: doc.id,
              acceptedJobs: acceptedPost
            })
          }
        })

        setList(Data)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
        setLoading(false)

      })
  }

  const FinishJob = async (job, key, beforeImage, afterImage) => {
    setLoading(true);
    console.log(key)
    let beforeImageUrl = 'false';
    let afterImageUrl = 'false'

    beforeImageUrl = await uploadImage(beforeImage);
    afterImageUrl = await uploadImage(afterImage);


    const date = new Date();

    firestore()
      .collection('Finished')
      .add({
        JobDone: job.acceptedJobs,
        acceptedId: key,
        date: date.getDate(),
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        beforeWork: beforeImageUrl,
        afterWork: afterImageUrl,
      }).then(() => {
        firestore().collection('Accepted').doc(key)
          .delete()
          .then(() => {
            setUpdate(!update)
            setLoading(false);

            Alert.alert('Success', 'Job Finished')
          }).catch((err) => {
            console.log(err);
          })


      }).catch((err) => {
        setLoading(false);
        console.log(err)
      })
  }

  const uploadImage = async (image) => {
    const uploadUri = image

    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1)

    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.')

    filename = name + Date.now() + '.' + extension

    const StorageRef = storage().ref(`photos/${filename}`)

    const task = StorageRef.putFile(uploadUri)

    try {
      await task

      const url = await StorageRef.getDownloadURL()
      return url
    } catch (error) {
      console.log(error)
      return null
    }

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
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>No Ongoing Jobs</Text>
              </View>)}
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default Ongoing