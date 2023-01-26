import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, TextInput, Button } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'
import Icon from 'react-native-vector-icons/AntDesign'
import firestore from '@react-native-firebase/firestore'

const CreatePost = ({navigation}) => {

  const data = [
    { key: '1', value: 'Plumber', },
    { key: '2', value: 'Architect' },
    { key: '3', value: 'Sweeper' },
    { key: '4', value: 'Painter', },

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
  const handlePosts = () => {
    setLoading(true);
    firestore()
      .collection('posts')
      .add({
        name: fname + lname,
        email: email,
        address: address,
        phone: phone,
        postalCode:postalCode,
        budget:budget,
        price:price,
        brief:brief,
        category:category
      })
      .then(() => {
        setLoading(false)
        console.log('Post Added')
        navigation.navigate('PostDetails')
      })
      .catch((err)=>{
        setLoading(false)
        console.log(err)
      })
      
  }

  return (
    <>
      <ScrollView>
        <View style={{ marginTop: 20, padding: 10 }}>
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
            <TextInput value={email} onChangeText={setEmail} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Email' mode='outlined' />
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", gap: 4 }}>

            <View style={{ display: 'flex', width: '50%' }}>
              <Text>Client's Phone Number</Text>
              <TextInput value={phone} onChangeText={setPhone} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Phone Number' mode='outlined' />
            </View>
            <View style={{ display: 'flex', width: '50%' }}>
              <Text>Postal Code</Text>
              <TextInput value={postalCode} onChangeText={setPostalCode} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Postal Code' mode='outlined' />
            </View>

          </View>
          <View style={{ display: 'flex', width: '100%' }}>
            <Text>Address</Text>
            <TextInput value={address} onChangeText={setAddress} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Address' mode='outlined' />
          </View>
          <View style={{ display: 'flex', width: '100%' }}>
            <Text>Work Brief</Text>
            <TextInput value={brief} onChangeText={setBrief} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 80, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Brief' mode='outlined' />
          </View>



          <View style={{ display: 'flex', width: '100%', }}>
            <Text style={{ marginBottom: 10 }}>Select Category</Text>
           
            <SelectList
              setSelected={(val) => setCategory(val)}
              data={data}
              save="value"
            />
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", gap: 4 }}>

            <View style={{ display: 'flex', width: '50%' }}>
              <Text>Budget</Text>
              <TextInput value={budget} onChangeText={setBudget} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Budget' mode='outlined' />
            </View>
            <View style={{ display: 'flex', width: '50%' }}>
              <Text>Price</Text>
              <TextInput value={price} onChangeText={setPrice} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Price' mode='outlined' />
            </View>

          </View>

          {loading ? <ActivityIndicator/> : <TouchableOpacity onPress={handlePosts} style={{ display: 'flex', alignItems: 'flex-end', paddingTop: 10, paddingBottom: 10 }}>
            <Button color='white' style={{ width: 100, padding: 5 }} icon={() => (<Icon name='pluscircleo' size={23} color='white' />)} mode="contained">
              Add
            </Button>
          </TouchableOpacity>}

        </View>
        <View style={{ paddingTop: 70 }}></View>
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
  }

})

export default CreatePost