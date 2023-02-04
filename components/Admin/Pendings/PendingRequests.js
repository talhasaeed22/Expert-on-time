import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'
import PendingsBox from './PendingsBox'

const PendingRequests = () => {


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
            backgroundColor: 'white',
            borderRadius: 10
        }

    })
    return (

       <ScrollView>
         <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
            <View style={{ marginTop: 20, padding: 10 }}>
                <Text style={styles.primaryHeading}>Pending Requests</Text>
            </View>
            <PendingsBox/>
        </View>
       </ScrollView>
    )
}



export default PendingRequests