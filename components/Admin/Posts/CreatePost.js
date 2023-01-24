import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Avatar, TextInput, Button } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'

const CreatePost = () => {
  const countries = ["Plumber", "Architect", "Painter", "Sweeper"]
  const data = [
    {key:'1', value:'Plumber',},
    {key:'2', value:'Architect'},
    {key:'3', value:'Sweeper'},
    {key:'4', value:'Painter', },

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

  return (
    <>
      <View style={{ marginTop: 20, padding: 10 }}>
        <Text style={styles.primaryHeading}>CreatePost</Text>
      </View>
      <ScrollView>
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



          <View style={{ display: 'flex', width: '100%',}}>
            <Text style={{marginBottom:10}}>Select Category</Text>
            {/* <TextInput value={phone} onChangeText={setPhone} underlineColor='white' theme={{ colors: { placeholder: '#636bad', text: '#181c3f', primary: '#636bad', } }} style={{ marginTop: 7, marginBottom: 7, color: 'red', height: 50, backgroundColor: '#f5f5f5', borderRadius: 10 }} label='Phone Number' mode='outlined' /> */}
            {/* <View style={{borderWidth:1, borderRadius:6, borderColor:'gray'}}>
              <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setCategory(selectedItem)
              }}
              
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
            </View> */}
            <SelectList 
        setSelected={(val) => setSelected(val)} 
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

  },
  form: {
    // borderWidth: 1,
    padding: 10
  }

})

export default CreatePost