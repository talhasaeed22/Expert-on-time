import { View, Text, ScrollView, ActivityIndicator, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeBox from '../Home/HomeBox'
import Navigation from '../Navigation'
import JobsBox from './JobsBox'
import { useIsFocused } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import auth from '@react-native-firebase/auth'

const NewJob = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false)
  const [found, setFound] = useState(false)
  const changeFocus = () => {
    setFound(false)
    setUpdate(!update)
  }
  useEffect(() => {
    getPosts();
  }, [isFocused, update])

  const checkPending =  (id) => {

      firestore()
      .collection('Pendings')
      .get()
      .then((queryData) => {

        queryData.forEach((doc) => {
          const { postID, handymanID } = doc.data();

          if (postID === id && handymanID === auth().currentUser.uid) {
            setFound(true)
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })

    // Alert.alert(found === true ? 'true' : 'false')
  }
  const checkAccepted =  (id) => {
    
     firestore()
     .collection('Accepted')
     .get()
     .then((queryData) => {

       queryData.forEach((doc) => {
         const { acceptedPost } = doc.data();

         if (acceptedPost.post.id === id ) {
           setFound(true)
         }
       })
     })
     .catch((err) => {
       console.log(err)
     })

   // Alert.alert(found === true ? 'true' : 'false')
 }

  const getPosts =  () => {
    const Data = [];
    let count = 1;
    setLoading(true)
    firestore()
      .collection('posts')
      .get()
      .then((queryData) => {
        queryData.forEach((doc) => {
          const { name, email, address, phone, postalCode, budget, brief, price, category, status, handyman } = doc.data();
          //  checkPending(doc.id)
          //  checkAccepted(doc.id)
          let found = false
          handyman.forEach((doc)=>{
            if(doc === auth().currentUser.uid){
              found = true;
            }
          })
          
          if (status === 'New' && !found) {
            Data.push({
              id: doc.id,
              jobNumber:count,
              name: name,
              email: email,
              address: address,
              phone: phone,
              postalCode: postalCode,
              budget: budget,
              price: price,
              brief: brief,
              category: category,
              status:status,
              handyman:handyman
            })
            count ++;
          }

        })

        setList(Data)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
        setLoading(false)

      })
  }
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#e7edf7' }}>
        <Navigation changeFocus={changeFocus} navigation={navigation} />
        <View style={{ paddingVertical: 20, backgroundColor: "#5e48db", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-around", }}>
            <Text style={{ color: "white", fontSize: 25, fontWeight: 'bold' }}>New Jobs</Text>
            {/* <HomeBox /> */}
          </View>


        </View>
        <View style={{ backgroundColor: '#5e48db', }}>
          <View style={{ backgroundColor: "white", display: "flex", gap: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, }}>
            {loading ? <ActivityIndicator /> : (list.length !== 0 ? list.map((element, index) => {
              return <JobsBox navigation={navigation} changeFocus={changeFocus} route={route} key={index} element={element} index={index} />
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

export default NewJob