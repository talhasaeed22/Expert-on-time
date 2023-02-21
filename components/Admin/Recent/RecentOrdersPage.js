import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontsinto from 'react-native-vector-icons/Fontisto'
import RecentAdminDetail from './RecentAdminDetail'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import firestore from '@react-native-firebase/firestore'
import { useIsFocused } from '@react-navigation/native'

const Home = ({ navigation }) => {
    const isFocus = useIsFocused();
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0)

    useEffect(() => {
        getRecent();
    }, [isFocus])

    const getRecent = () => {
        const Data = [];
        setLoading(true)
        let counted = 0;
        firestore()
            .collection('Recent')
            .get()
            .then((querryData) => {
                querryData.forEach((doc) => {
                    const { job } = doc.data();
                    Data.push({
                        id: doc.id,
                        JobDone: job.JobDone,
                        date: job.date,
                        year: job.year,
                        month: job.month,
                        beforeWork:job.beforeWork,
                        afterWork:job.afterWork
                    })
                    counted++
                })
                setList(Data)
                setLoading(false)
                setCount(counted)
            }).catch((err) => {
                console.log(err)
                setLoading(false)

            })
    }
    return (
        <ScrollView>
            <View style={{ padding: 20 }}>

                <View style={styles.box}>
                    <View style={{ display: 'flex' }}>
                        <Text style={{ fontSize: 24, color: "white", fontWeight: 'bold' }}>Recent Jobs</Text>
                        <Text style={{ fontSize: 35, padding: 8, color: 'white', fontWeight: 'bold' }}>{count}</Text>
                    </View>

                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, padding: 30 }}>
                        <Icon name="clock-check-outline" size={35} color={'black'} />
                        {/* <Text style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>View More</Text> */}
                    </View>

                </View>


                {loading ? <ActivityIndicator /> : (list.length !== 0 ? list.map((element, index) => {
                    return <View key={index} style={styles.Lowerbox}>
                        <View>
                            <Text style={styles.primaryHeading}>Client Name</Text>
                            <Text style={{ fontSize: 16 }}>{element.JobDone.post.name}</Text>
                            <Text>{'\n'}</Text>
                            <Text style={styles.primaryHeading}>Handyman Name</Text>
                            <Text style={{ fontSize: 16 }}>{element.JobDone.handymanName}</Text>
                            <Text>{'\n'}</Text>
                            <Text style={styles.primaryHeading}>Handyman Email</Text>
                            <Text style={{ fontSize: 16 }}>{element.JobDone.handymanEmail}</Text>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate('RecentDetails', { JobDone: element.JobDone, year: element.year, month: element.month, date: element.date, beforeImage:element.beforeWork, afterImage:element.afterWork }) }} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#39be5f', padding: 15, borderRadius: 10 }}>
                            <Fontsinto name='prescription' size={31} color={'white'} />
                            <Text style={{ fontSize: 14, borderBottomWidth: 1, borderBottomColor: 'white', color: 'white' }}>View Detail</Text>
                        </TouchableOpacity>

                    </View>
                }) :
                    <View style={{ display: "flex", alignItems: "center", marginTop: 30, }}>
                        <Icon name='folder-text-outline' size={35} color='black' />
                        <Text style={{ textAlign: "center", fontWeight: "bold" }}>No Jobs</Text>
                    </View>)}
            </View>
        </ScrollView>
    )
}

const RecentOrdersPage = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RecentOrderHome" component={Home} options={{
                headerShown: false
            }} />
            <Stack.Screen name="RecentDetails" component={RecentAdminDetail} options={{
                headerShown: false
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
        marginTop: 20,
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

export default RecentOrdersPage