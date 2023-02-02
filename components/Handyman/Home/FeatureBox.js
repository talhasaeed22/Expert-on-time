import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
const FeatureBox = ({iconname, Icon, name}) => {
  return (
    <View style={{display:"flex", flexDirection:'column', alignItems:"center", borderWidth:1, borderColor:'lightgray', padding:20, paddingHorizontal:35, borderRadius:15, gap:10}}>
      <Icon name={iconname} size={50} color='black' />
      {/* <FontAwesome name='user-circle' size={60} color='black' /> */}
      <Text style={{fontSize:17}}>{name}</Text>
      <Text style={{color:'#5e48db', fontWeight:'bold'}}>See More</Text>
    </View>
  )
}

export default FeatureBox