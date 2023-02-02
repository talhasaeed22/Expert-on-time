import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Button, IconButton } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'
import Material from 'react-native-vector-icons/MaterialIcons'
import Antdesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Navigation = ({navigation, changeFocus }) => {

    return (
        <>
            <View style={styles.container}>
                <View style={{ paddingVertical: 15, display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Material name='keyboard-arrow-left' size={33} color='black' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>[changeFocus()]}>
                        <IconButton
                            icon={() => (<FontAwesome name='refresh' size={20} color='white' />)}
                            iconColor={'white'}
                            size={20}
                            style={{ backgroundColor: "#5e48db" }}

                        />
                    </TouchableOpacity>

                </View>
                <View style={{ display: "flex", flexDirection: "row", gap: 10, paddingVertical: 15, alignItems:'center' }}>
                    <View>
                        <Entypo name='user' size={42} color='#5e48db' />
                    </View>
                    <View style={{ display: 'flex' }}>
                        <Text style={{fontSize:23, fontWeight:'bold', color:'black'}}>Hi, John Williams</Text>
                        <Text style={{fontSize:17, fontWeight:"bold", }}>Abc@nutel.com</Text>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e7edf7',
        paddingHorizontal: 20,
        paddingVertical:10
    }
})

export default Navigation