import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontsinto from 'react-native-vector-icons/Fontisto'
import OrderDetail from './OrderDetail'
import { createStackNavigator } from '@react-navigation/stack';
import OrderBox from './OrderBox'
const Stack = createStackNavigator();

const Home = ({navigation}) => {
    return(
        <ScrollView>
        <View style={{ padding: 20, paddingBottom: 5 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', }}>Active Jobs Detail</Text>
        </View>
        <View style={{ padding: 20 }}>
            <View style={styles.box}>
                <View style={{ display: 'flex' }}>
                    <Text style={{ fontSize: 20, color: "white", fontWeight: 'bold' }}>Total Active Jobs</Text>
                    <Text style={{ fontSize: 35, padding: 8, color: 'white', fontWeight: 'bold' }}>23</Text>
                </View>

                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10, paddingLeft: 20, paddingRight: 20, }}>
                    <Icon name='hammer-wrench' size={40} color={'black'} />
                    {/* <Text style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>View More</Text> */}
                </View>

            </View>
        </View>
        <View style={{ padding: 20 }}>
            <OrderBox navigation={navigation}/>
        </View>
    </ScrollView>
    )
}

const ActiveOrders = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OrderHome" component={Home} options={{
                headerShown:false
            }} />
            <Stack.Screen name="Details" component={OrderDetail} options={{
                headerShown:false
            }} />

        </Stack.Navigator>

    )
}


const styles = StyleSheet.create({

    box: {
        // #f8c42a
        backgroundColor: 'orangered',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 60,
        paddingLeft: 30,
        paddingRight: 15,
        borderRadius: 7,
        color: 'white',
        // marginBottom: 20
    },
    primaryHeading: {
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold'
    },
    Lowerbox: {
        // #f8c42a

        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingRight: 15,
        borderRadius: 15,
        color: 'white',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})

export default ActiveOrders