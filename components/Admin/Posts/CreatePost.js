import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, ToastAndroid, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, TextInput, Button } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'
import Icon from 'react-native-vector-icons/AntDesign'
import firestore from '@react-native-firebase/firestore'
import Foundation from 'react-native-vector-icons/Foundation'
import Messagemodal from '../../Messagemodal';
import SendSMS from 'react-native-sms'
import { useIsFocused } from '@react-navigation/native';

const CreatePost = ({ navigation }) => {
  const isFocus = useIsFocused()


  const data = [
    { key: '1', value: 'Handyman', },
    { key: '2', value: 'Builder' },
    { key: '3', value: 'Roofer' },
    { key: '4', value: 'Electrician', },
    { key: '5', value: 'Pest Control', },
    { key: '4', value: 'Damp & Mould', },
  ]
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [budget, setBudget] = useState('')
  const [price, setPrice] = useState('')
  const [brief, setBrief] = useState('')
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [message, setMessage] = useState('')
  useEffect(() => {
    setfname('')
    setlname('')
    setEmail('')
    setAddress('')
    setPhone('')
    setPostalCode('')
    setBudget('')
    setPrice('')
    setBrief('')
    setCategory('')

    setMessage('')
  }, [isFocus])
  const CloseModal = () => {
    setModalVisible(false);
  }
  const handlePosts = () => {
    if (fname === '' || lname === '' || email === '' || address === '' || phone === '' || postalCode === '' || budget === '' || price === '' || brief === '' || category === '') {

      setMessage('Please fill all the required fields!')
      setModalVisible(true);



    } else if (parseInt(budget) > parseInt(price)) {
      setMessage('Price should be greater than Payment')
      setModalVisible(true)
    }
    else {
      const date = new Date();
      setLoading(true);
      firestore()
        .collection('posts')
        .add({
          name: fname + ' ' + lname,
          email: email,
          address: address,
          phone: phone,
          postalCode: postalCode,
          budget: budget,
          price: price,
          brief: brief,
          handyman: [],
          category: category,
          status: 'New',
          date: date.getDate(),
          year: date.getFullYear(),
          month: date.getMonth() + 1

        })
        .then(() => {
          setLoading(false)
          // console.log('Post Added')
          
          let arr = []
          firestore().collection('handymans').get().then((numbers) => {
            numbers.forEach((doc) => {
              const { phone } = doc.data();
              arr.push(phone);
            })
            SendSMS.send({
              body: 'New Post is Uploaded!',
              recipients: arr,
              successTypes: ['sent', 'queued'],
              allowAndroidSendWithoutReadPermission: true
            }, (completed, cancelled, error) => {

              console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

            });
            ToastAndroid.showWithGravity(
              'Post Created',
              ToastAndroid.LONG,
              ToastAndroid.CENTER,
          );

            navigation.navigate('PostDetails')
          }).catch((err) => {
            console.log(err)
          })

        })
        .catch((err) => {
          setLoading(false)
          console.log(err)
        })
    }

  }

  return (
    <>
      <ScrollView>
        <View style={{ marginTop: 20, padding: 10, }}>
          <Text style={styles.primaryHeading}>Create Post</Text>
        </View>
        <View style={styles.form}>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", gap: 4 }}>

            <View style={{ display: 'flex', width: '50%' }}>
              <Text>Client's First Name</Text>
              <TextInput value={fname} onChangeText={setfname} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='First Name' mode='outlined' />
            </View>
            <View style={{ display: 'flex', width: '50%' }}>
              <Text>Client's First Name</Text>
              <TextInput value={lname} onChangeText={setlname} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Last Name' mode='outlined' />
            </View>

          </View>

          <View style={{ display: 'flex', width: '100%' }}>
            <Text>Client's Email</Text>
            <TextInput autoCapitalize='none' value={email} onChangeText={setEmail} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Email' mode='outlined' />
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", gap: 4 }}>

            <View style={{ display: 'flex', width: '50%' }}>
              <Text>Client's Phone Number</Text>
              <TextInput  keyboardType='numeric' value={phone} onChangeText={setPhone} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Phone Number' mode='outlined' />
            </View>
            <View style={{ display: 'flex', width: '50%' }}>
              <Text>Postal Code</Text>
              <TextInput keyboardType='numeric' value={postalCode} onChangeText={setPostalCode} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Postal Code' mode='outlined' />
            </View>

          </View>
          <View style={{ display: 'flex', width: '100%' }}>
            <Text>Address</Text>
            <TextInput value={address} onChangeText={setAddress} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Address' mode='outlined' />
          </View>
          <View style={{ display: 'flex', width: '100%' }}>
            <Text>Job Description</Text>
            <TextInput value={brief} onChangeText={setBrief} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 80, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Job Description' mode='outlined' />
          </View>



          <View style={{ display: 'flex', width: '100%', }}>
            <Text style={{ marginBottom: 10 }}>Select Category</Text>

            <SelectList
              setSelected={(val) => setCategory(val)}
              data={data}
              save="value"
            />
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", gap: 4, marginTop: 10 }}>

            <View style={{ display: 'flex', width: '50%', }}>
              <Text>Payment</Text>
              <TextInput keyboardType='numeric' right={<TextInput.Icon icon={() => (<Foundation name='pound' size={30} color='#5e5c5a' />)} style={{ paddingTop: 10 }} />} value={budget} onChangeText={setBudget} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Payment' mode='outlined' />
            </View>
            <View style={{ display: 'flex', width: '50%' }}>
              <Text>Price</Text>
              <TextInput keyboardType='numeric' right={<TextInput.Icon icon={() => (<Foundation name='pound' size={30} color='#5e5c5a' />)} style={{ paddingTop: 10 }} />} value={price} onChangeText={setPrice} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Price' mode='outlined' />
            </View>

          </View>

          {loading ? <ActivityIndicator /> : <TouchableOpacity onPress={handlePosts} style={{ display: 'flex', alignItems: 'flex-end', paddingTop: 10, paddingBottom: 10 }}>
            <Button labelStyle={{ fontSize: 17 }} color='white' style={{ width: 150, padding: 5 }} icon={() => (<Icon name='pluscircleo' size={23} color='white' />)} mode="contained">
              Add
            </Button>
          </TouchableOpacity>}

        </View>
        <View style={{ paddingTop: 70 }}></View>
        <Messagemodal title={'Warning'} modalVisible={modalVisible} CloseModal={CloseModal} message={message} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({

  primaryHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',

  },
  form: {
    // borderWidth: 1,
    padding: 10
  },



})

export default CreatePost