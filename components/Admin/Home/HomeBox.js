import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeBox = ({iconname, Icon, heading, bgcolor, id, navigation}) => {
    const styles = StyleSheet.create({
        box: {
            // #f8c42a
            backgroundColor: bgcolor,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:20,
            paddingRight:15,
            borderRadius: 15,
            color:'white'
        },
        primaryHeading :{
            fontSize:18,
            color:'white',

        }
    })

    const handleOnPress = ()=>{
        if(id === 'handyman'){
            navigation.navigate('Handymans')
        }
    }
    return (
        <View style={styles.box}>
            <View style={{ display: 'flex' }}>
                <Text style={styles.primaryHeading}>{heading}</Text>
                <Text style={{fontSize:35, padding:8, color:'white', fontWeight:'bold'}}>21</Text>
            </View>
            <TouchableOpacity onPress={handleOnPress}>
            <View style={{ display: 'flex', alignItems:'center', backgroundColor:'white', padding:15, borderRadius:20 }}>
                <Icon name={iconname} size={31} color={'black'} />
                <Text style={{fontSize:16, borderBottomWidth:1, borderBottomColor:'lightgray'}}>View More</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}


export default HomeBox