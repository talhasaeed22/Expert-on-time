import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'
import { StackActions } from '@react-navigation/native';

const RecentAdminDetail = ({route, navigation}) => {
    const {JobDone} = route.params;
  return (
    <ScrollView >
            <View style={{ padding: 20, paddingBottom: 5 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: "black" }}>Job Detail</Text>
            </View>
            <View style={{ padding: 20 }}>
                <View style={styles.box}>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ display: 'flex' }}>
                            <Text style={styles.bold}>Job ID</Text>
                            <Text>{JobDone.id}</Text>
                        </View>
                        <View>
                            <Text style={{ color: "green", fontWeight: "bold" }}>Finished</Text>
                        </View>
                    </View>
                    <View >
                        <Text style={{ fontWeight: "bold", fontSize: 17, color: 'orangered' }}>25 January, 2022</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Client Name</Text>
                        <Text>{JobDone.post.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Client Email</Text>
                        <Text>{JobDone.post.email}</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Client Address</Text>
                        <Text style={{ paddingRight: 20 }}>{JobDone.post.address}</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Client Phone Number</Text>
                        <Text>{JobDone.post.phone}</Text>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgray" }}></View>

                    <View>
                        <Text style={styles.bold}>Handyman Name</Text>
                        <Text>{JobDone.handymanName}</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Handyman Email</Text>
                        <Text>{JobDone.handymanEmail}</Text>
                    </View>
                    

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }}>
                        <View>
                            <Text style={{ fontSize: 17 }}>Category</Text>

                        </View>
                        <View style={{ paddingRight: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: "black" }}>{JobDone.post.category}</Text>

                        </View>
                    </View>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', }}>
                        <View>
                            <Text style={{ fontSize: 17 }}>Budget</Text>

                        </View>
                        <View style={{ paddingRight: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: "black" }}>{JobDone.post.budget}</Text>

                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 17 }}>Price</Text>

                        </View>
                        <View style={{ paddingRight: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: "black" }}>{JobDone.post.price}</Text>

                        </View>
                    </View>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 17 }}>Status</Text>

                        </View>
                        <View style={{ paddingRight: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: "green" }}>Finished</Text>

                        </View>
                    </View>

                </View>
                <TouchableOpacity onPress={() => {
                    navigation.dispatch(
                        StackActions.replace('RecentOrderHome')
                    );
                }} style={{ marginVertical: 30 }}>
                    <Button color='white' buttonColor='orangered' labelStyle={{ fontSize: 17 }} style={{ padding: 5, }} icon={() => (<Icon name='caretleft' size={20} color='white' />)} mode="contained">
                        Go Back
                    </Button>
                </TouchableOpacity>
            </View>
        </ScrollView>
  )
}

const styles = StyleSheet.create({
  box: {
      // #f8c42a

      backgroundColor: 'white',
      display: 'flex',
      padding: 15,
      paddingRight: 11,
      gap: 15,
      borderRadius: 15


  },
  bold: {
      fontWeight: "bold",
      color: 'black',
      fontSize: 17
  },
  primaryHeading: {
      fontSize: 19,
      color: 'black',
      fontWeight: 'bold',

  },
})

export default RecentAdminDetail