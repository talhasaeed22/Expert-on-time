import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'
import HandymanBox from './HandymanBox'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useIsFocused } from "@react-navigation/native";

const ViewHandyman = () => {
  const isFocused = useIsFocused();

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    getHandymans();
  }, [deleted, isFocused])

  const getHandymans = () => {
    setCount(0);
    const Data = [];
    let counted = 0;
    setLoading(true)
    firestore()
      .collection('handymans')
      .get()
      .then((queryData) => {
        queryData.forEach((doc) => {
          const { name, email, password, phone, category } = doc.data();

          Data.push({
            id: doc.id,
            name: name,
            email: email,
            password: password,
            phone: phone,
            category: category
          })
          counted++;
        })
        setCount(counted);
        setList(Data)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
        setLoading(false)

      })
  }
  const deleteHandman = (key) => {

    firestore()
      .collection('handymans')
      .doc(key)
      .delete()
      .then(() => {
        Alert.alert('Success', 'Deleted Successfully')
        // setList(null)
        setDeleted(!deleted)
      })

  }
  return (
    <>
      <ScrollView>
        <View style={{ padding: 20, paddingBottom: 5 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', }}>Handymans Details</Text>
        </View>
        <View style={{ padding: 20 }}>
          <View style={styles.box}>
            <View style={{ display: 'flex' }}>
              <Text style={{ fontSize: 20, color: "white", fontWeight: 'bold' }}>Total Handymans</Text>
              <Text style={{ fontSize: 35, padding: 8, color: 'white', fontWeight: 'bold' }}>{count}</Text>
            </View>

            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10, paddingLeft: 20, paddingRight: 20, }}>
              <Icon name='face-man-outline' size={40} color={'black'} />
              {/* <Text style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>View More</Text> */}
            </View>

          </View>
        </View>
        {loading ? <ActivityIndicator /> : (list.length !== 0 ? list.map((element, index) => {
          return <HandymanBox deleteHandman={deleteHandman} key={index} element={element} index={index} />
        }) :
          <View style={{ display: "flex", alignItems: "center", marginTop: 30, }}>
            <Icon name='folder-text-outline' size={35} color='black' />
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>No Handymans Added</Text>
          </View>)

        }
        <View style={{ paddingTop: 100 }}></View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({

  box: {
    // #f8c42a
    backgroundColor: '#4e75ec',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 60,
    paddingLeft: 30,
    paddingRight: 15,
    borderRadius: 7,
    color: 'white',
    // marginBottom: 20
  },

})

export default ViewHandyman