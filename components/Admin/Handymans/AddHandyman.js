import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Avatar, TextInput, Button } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list'
import Icon from 'react-native-vector-icons/AntDesign'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

const AddHandyman = ({navigation}) => {
  const data = [
    { key: '1', value: 'Plumber', },
    { key: '2', value: 'Architect' },
    { key: '3', value: 'Sweeper' },
    { key: '4', value: 'Painter', },

  ]
  const [loading, setLoading] = useState(false)
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const handleHandyman = () => {
    setLoading(true);
    firestore()
      .collection('handymans')
      .add({
        name: fname + ' ' + lname,
        email: email,
        password: password,
        phone: phone,
        category: category
      })
      .then(() => {
        auth().signOut().then(()=>{
          auth().createUserWithEmailAndPassword(email, password)
          .then(()=>{
            auth().signOut().then(()=>{
              auth().signInWithEmailAndPassword('admin@firebase.com', 'Admin123')
            }).catch((err)=>{console.log(err)})
          }).catch((err)=>{console.log(err)})
        }).catch((err)=>{console.log(err)})
        setLoading(false)
        console.log('Handyman Added')
        navigation.navigate('ViewHandymans')
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })

  }

  return (
    <ScrollView>
      <View style={{ marginTop: 20, padding: 10 }}>
        <Text style={styles.primaryHeading}>Add Handyman</Text>
      </View>
      <View style={styles.form}>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", gap: 4 }}>

          <View style={{ display: 'flex', width: '50%' }}>
            <Text>First Name</Text>
            <TextInput value={fname} onChangeText={setfname} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='First Name' mode='outlined' />
          </View>
          <View style={{ display: 'flex', width: '50%' }}>
            <Text>First Name</Text>
            <TextInput value={lname} onChangeText={setlname} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Last Name' mode='outlined' />
          </View>

        </View>

        <View style={{ display: 'flex', width: '100%' }}>
          <Text>Email Address</Text>
          <TextInput value={email} onChangeText={setEmail} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Email' mode='outlined' />
        </View>

        <View style={{ display: 'flex', width: '100%' }}>
          <Text>Password</Text>
          <TextInput value={password} onChangeText={setPassword} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Password' mode='outlined' />
        </View>

        <View style={{ display: 'flex', width: '100%' }}>
          <Text>Confirm Password</Text>
          <TextInput value={cpassword} onChangeText={setCPassword} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Confirm Password' mode='outlined' />
        </View>

          <View style={{ display: 'flex', width: '100%' }}>
            <Text>Client's Phone Number</Text>
            <TextInput value={phone} onChangeText={setPhone} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Phone Number' mode='outlined' />
          </View>
      
        <View style={{ display: 'flex', width: '100%', }}>
          <Text style={{ marginBottom: 10 }}>Select Category</Text>

          <SelectList

            setSelected={(val) => setCategory(val)}
            data={data}
            save="value"
          />
        </View>
        {loading ? <ActivityIndicator /> : <TouchableOpacity onPress={handleHandyman} style={{ display: 'flex', alignItems: 'flex-end', paddingTop: 10, paddingBottom: 10 }}>
          <Button color='white' buttonColor='#4e75ec' style={{ padding: 5 }} icon={() => (<Icon name='pluscircleo' size={23} color='white' />)} mode="contained">
            Add
          </Button>
        </TouchableOpacity>}

      </View>
      <View style={{ paddingTop: 70 }}></View>
    </ScrollView>
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

export default AddHandyman