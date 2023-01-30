import { View, Text } from 'react-native'
import React from 'react'

const HomeBox = ({number, para1, para2}) => {
  return (
    <View style={{display:'flex', alignItems:"center", backgroundColor:"#7c66f9", padding:20, borderRadius:10}}>
      <Text style={{fontSize:30, fontWeight:"bold", color:"white"}}>{number}</Text>
      <Text style={{fontSize:14, color:"white"}}>{para1}</Text>
      <Text style={{fontSize:14, color:"white"}}>{para2}</Text>
    </View>
  )
}

export default HomeBox