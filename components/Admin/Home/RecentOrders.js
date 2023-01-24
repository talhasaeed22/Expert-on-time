import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Fontsinto from 'react-native-vector-icons/Fontisto'

const RecentOrders = () => {

    const styles = StyleSheet.create({
        box: {
            // #f8c42a
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            paddingRight: 15,
            borderRadius: 15,
            color: 'white',
            alignItems:'center',
            shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        },
        primaryHeading: {
            fontSize: 19,
            color: 'black',
            fontWeight:'bold'
        }
    })
    return (
        <View style={styles.box}>
            <View>
                <Text style={styles.primaryHeading}>Client Name</Text>
                <Text style={{fontSize:16}}>ABC</Text>
                <Text>{'\n'}</Text>
                <Text style={styles.primaryHeading}>Handyman Name</Text>
                <Text style={{fontSize:16}}>DEF</Text>
                <Text>{'\n'}</Text>
                <Text style={styles.primaryHeading}>Order Date</Text>
                <Text style={{fontSize:16}}>21 Jan 2023</Text>
            </View>
            <View style={{ display: 'flex', alignItems:'center', backgroundColor:'#39be5f', padding:15, borderRadius:20 }}>
                <Fontsinto name='prescription' size={31} color={'white'} />
                <Text style={{fontSize:14, borderBottomWidth:1, borderBottomColor:'white', color:'white'}}>View Detail</Text>
            </View>

        </View>
    )
}



export default RecentOrders