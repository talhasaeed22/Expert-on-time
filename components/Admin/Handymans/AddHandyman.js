import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Avatar, TextInput, Button } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list'
import Icon from 'react-native-vector-icons/AntDesign'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import Messagemodal from '../../Messagemodal';
import { useIsFocused } from '@react-navigation/native';
import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage'

const AddHandyman = ({ navigation }) => {
  const [image, setImage] = useState('')
  const handleImage = () => {
    ImagePicker.openPicker({
      cropping: true
    }).then(image => {
      console.log(image);
      const imaeUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imaeUri);
    }).catch((err) => {
      console.log(err)
    })
  }

  const isFocus = useIsFocused();
  const data = [
    { key: '1', value: 'Handyman', },
    { key: '2', value: 'Builder' },
    { key: '3', value: 'Roofer' },
    { key: '4', value: 'Electrician', },
    { key: '5', value: 'Pest Control', },
    { key: '4', value: 'Damp & Mould', },
  ]
  const [loading, setLoading] = useState(false)
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [message, setMessage] = useState('')
  useEffect(() => {
    setfname('')
    setlname('')
    setEmail('')
    setPassword('')
    setPhone('')
    setCPassword('')
    setCategory('')

    setMessage('')
  }, [isFocus])
  const CloseModal = () => {
    setModalVisible(false);
  }
  const handleHandyman = async () => {
    if (fname === '' ||  email === '' || password === '' || cpassword === '' || phone === '' || category === '') {
      setMessage('Please fill all the required fields!')

      setModalVisible(true);
    } else if (password !== cpassword) {
      setMessage('Password does not match!')
      setModalVisible(true);
    } else if (password.length < 6) {
      setMessage('Password should be of length 6 or greater!')
      setModalVisible(true);
    }
    else {
      setLoading(true);
      let ImageUrl = 'false';

      ImageUrl = await uploadImage(image);
      firestore()
        .collection('handymans')
        .add({
          name: fname + ' ' + lname,
          email: email,
          password: password,
          phone: phone,
          category: category,
          photo:ImageUrl
        })
        .then(() => {
          auth().signOut().then(() => {
            auth().createUserWithEmailAndPassword(email, password)
              .then((userCred) => {
                userCred.user.updateProfile({
                  displayName: fname + ' ' + lname,
                  photoURL:ImageUrl
                  
                })

                auth().signInWithEmailAndPassword('admin@firebase.com', 'Admin123').then(() => {
                  console.log('added');
                  setLoading(false)
                  navigation.navigate('ViewHandymans')

                }).catch((err) => { console.log(err) })
              }).catch((err) => { console.log(err) })
          }).catch((err) => { console.log(err) })

        })
        .catch((err) => {
          setLoading(false)
          console.log(err)
        })
    }

  }
  const uploadImage = async (image) => {
    const uploadUri = image

    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1)

    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.')

    filename = name + Date.now() + '.' + extension

    const StorageRef = storage().ref(`profile/${filename}`)

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
    <View>
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
            <TextInput autoCapitalize='none' value={email} onChangeText={setEmail} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Email' mode='outlined' />
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
            <Text>Phone Number</Text>
            <TextInput keyboardType='numeric' value={phone} onChangeText={setPhone} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Phone Number' mode='outlined' />
          </View>

          <View style={{ display: 'flex', width: '100%', }}>
            <Text style={{ marginBottom: 10 }}>Select Category</Text>

            <SelectList

              setSelected={(val) => setCategory(val)}
              data={data}
              save="value"
            />
          </View>
          <View style={{ paddingVertical: 10, padding: 10, }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black', }}>Profile Photo</Text>
            <View style={{ padding: 10, }}>
              {image !== '' ? <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'orangered' }}>Image uploaded</Text> : <TouchableOpacity onPress={handleImage}><MaterialComm name='image-plus' size={50} color='black' /></TouchableOpacity>}
            </View>
          </View>
          {loading ? <ActivityIndicator /> : <TouchableOpacity onPress={handleHandyman} style={{ display: 'flex', alignItems: 'flex-end', paddingTop: 10, paddingBottom: 10 }}>
            <Button color='white' buttonColor='#4e75ec' style={{ padding: 5 }} icon={() => (<Icon name='pluscircleo' size={23} color='white' />)} mode="contained">
              Add
            </Button>
          </TouchableOpacity>}

        </View>
        <View style={{ paddingTop: 70 }}></View>
        <Messagemodal title={'Warning'} modalVisible={modalVisible} CloseModal={CloseModal} message={message} />

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
  form: {
    // borderWidth: 1,
    padding: 10
  }

})

export default AddHandyman