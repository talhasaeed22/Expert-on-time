import { View, Text, Modal, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
import { Dimensions } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
const Messagemodal = ({modalVisible, CloseModal, message, title}) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      CloseModal()
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={{textAlign: 'left', borderBottomWidth:1, borderBottomColor:'lightgray', paddingBottom:10,
        fontSize: 25,
        marginBottom: 15,
        fontWeight: 'bold',
        color: title === 'Warning' ? '#FFCC00' : 'green'}}>{title=== 'Warning'? <IonIcon name='ios-warning' size={26} color='#FFCC00' /> : <Ant name='checkcircle' size={23} color='green' />} {title}!</Text>
        <Text style={styles.modalText}>{message}</Text>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={() => { CloseModal() }}>
          <Text style={styles.textStyle}>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        // backgroundColor:"lightgray",
    
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#FFCC00',
        width:Dimensions.get('window').width - 20
      },
      button: {
        borderRadius: 20,
        padding: 10,
        // width: 200,
        elevation: 2,
        display:"flex",
        alignItems:"center"

      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:17,
        
      },
      modalText: {
        // marginBottom: 15,
        color:'black',
        // textAlign: 'center',
        marginBottom: 15,
        fontWeight:"normal",
        fontSize:18
      },
      warningText: {
        
      }
})
export default Messagemodal