import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

const HomeBox = ({ iconname, Icon, heading, bgcolor, id, navigation, loading, count }) => {
    


    const styles = StyleSheet.create({
        box: {
            // #f8c42a
            backgroundColor: bgcolor,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            paddingRight: 15,
            borderRadius: 10,
            color: 'white'
        },
        primaryHeading: {
            fontSize: 18,
            color: 'white',

        }
    })

    const handleOnPress = () => {
        if(id === 'Active Posts'){
            navigation.navigate('ActiveOrders')
        }else if(id === 'Pendings'){
            navigation.navigate('PendingRequests')
        }else if(id === 'Posts'){
            navigation.navigate('Posts')
        }
    }
    return (
        <View style={styles.box}>
            <View style={{ display: 'flex' }}>
                <Text style={styles.primaryHeading}>{heading}</Text>
                <Text style={{ fontSize: 35, padding: 8, color: 'white', fontWeight: 'bold' }}>{loading ? <ActivityIndicator color={'white'} size={'large'}/> : count}</Text>
            </View>
            <TouchableOpacity onPress={handleOnPress}>
                <View style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Icon name={iconname} size={31} color={'black'} />
                    <Text style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>View More</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default HomeBox