import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'
import { StackActions } from '@react-navigation/native';

const OrderDetail = ({navigation}) => {
    return (
        <ScrollView >
            <View style={{ padding: 20, paddingBottom: 5 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: "black" }}>Order Detail</Text>
            </View>
            <View style={{ padding: 20 }}>
                {/* <View style={styles.box}>
                    <View>
                        <Text style={styles.primaryHeading}>Client Name</Text>
                        <Text style={{ fontSize: 14 }}>ABC</Text>
                        <Text>{'\n'}</Text>
                        <Text style={styles.primaryHeading}>Client Email</Text>
                        <Text style={{ fontSize: 14 }}>DEF</Text>
                        <Text>{'\n'}</Text>
                        <Text style={styles.primaryHeading}>Client Address</Text>
                        <Text style={{ fontSize: 14 }}>21 Jan 2023</Text>
                        <Text>{'\n'}</Text>
                        <Text style={styles.primaryHeading}>Client Phone Number</Text>
                        <Text style={{ fontSize: 14 }}>21 Jan 2023</Text>
                        <Text>{'\n'}</Text>
                        <Text style={styles.primaryHeading}>Budget</Text>
                        <Text style={{ fontSize: 14 }}>21 Jan 2023</Text>

                    </View>
                    <View>
                        <Text style={styles.primaryHeading}>Handyman Name</Text>
                        <Text style={{ fontSize: 14 }}>ABC</Text>
                        <Text>{'\n'}</Text>
                        <Text style={styles.primaryHeading}>Handyman Email</Text>
                        <Text style={{ fontSize: 14 }}>DEF</Text>
                        <Text>{'\n'}</Text>
                        <Text style={styles.primaryHeading}>Handyman Phone Number</Text>
                        <Text style={{ fontSize: 14 }}>21 Jan 2023</Text>
                        <Text>{'\n'}</Text>
                        <Text style={styles.primaryHeading}>Order Date</Text>
                        <Text style={{ fontSize: 14 }}>21 Jan 2023</Text>
                        <Text>{'\n'}</Text>
                        <Text style={styles.primaryHeading}>Price</Text>
                        <Text style={{ fontSize: 14 }}>21 Jan 2023</Text>
                    </View>

                </View> */}
                <View style={styles.box}>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ display: 'flex' }}>
                            <Text style={styles.bold}>Order ID</Text>
                            <Text>#324235a2asd34</Text>
                        </View>
                        <View>
                            <Text style={{ color: "orangered", fontWeight: "bold" }}>Ongoing</Text>
                        </View>
                    </View>
                    <View >
                        <Text style={{ fontWeight: "bold", fontSize: 17, color: 'orangered' }}>25 January, 2022</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Client Name</Text>
                        <Text>John Doe</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Client Email</Text>
                        <Text>John@gmail.com</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Client Address</Text>
                        <Text style={{ paddingRight: 20 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque laborum nobis, porro iusto saepe corrupti ea</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Client Phone Number</Text>
                        <Text>+1232137</Text>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: "lightgray" }}></View>

                    <View>
                        <Text style={styles.bold}>Handyman Name</Text>
                        <Text>Somebody</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Handyman Email</Text>
                        <Text>Somebody@abc.com</Text>
                    </View>
                    <View>
                        <Text style={styles.bold}>Handyman Phone Number</Text>
                        <Text>+1232137</Text>
                    </View>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }}>
                        <View>
                            <Text style={{ fontSize: 17 }}>Category</Text>

                        </View>
                        <View style={{ paddingRight: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: "black" }}>Plumber</Text>

                        </View>
                    </View>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', }}>
                        <View>
                            <Text style={{ fontSize: 17 }}>Budget</Text>

                        </View>
                        <View style={{ paddingRight: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: "black" }}>23k</Text>

                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 17 }}>Price</Text>

                        </View>
                        <View style={{ paddingRight: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: "black" }}>23k</Text>

                        </View>
                    </View>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 17 }}>Status</Text>

                        </View>
                        <View style={{ paddingRight: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: "orangered" }}>Pending</Text>

                        </View>
                    </View>

                </View>
                <TouchableOpacity onPress={() => {
                    navigation.dispatch(
                        StackActions.replace('OrderHome')
                    );
                }} style={{ marginVertical: 30 }}>
                    <Button color='white' buttonColor='orangered' labelStyle={{ fontSize: 17 }} style={{ padding: 5, }} icon={() => (<Icon name='caretleft' size={20} color='white' />)} mode="contained">
                        Go Back
                    </Button>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    box: {
        // #f8c42a

        backgroundColor: 'white',
        display: 'flex',
        padding: 15,
        paddingRight: 11,
        gap: 15,
        borderRadius: 20


    },
    bold: {
        fontWeight: "bold",
        color: 'black',
        fontSize: 17
    },
    primaryHeading: {
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold',

    },
})

export default OrderDetail