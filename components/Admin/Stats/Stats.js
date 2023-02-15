import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { SelectList } from 'react-native-dropdown-select-list'
import Entypo from 'react-native-vector-icons/Entypo'
import firestore from '@react-native-firebase/firestore'
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stats = () => {
  const [price, setPrice] = useState(0)
  const [budget, setBudget] = useState(0)
  const [profit, setProfit] = useState(0)
  const [filter, setFilter] = useState('')
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    getSats()
  }, [update])

  const getSats = () => {
    let pricee = 0;
    let budgett = 0;


    firestore()
      .collection('Recent')
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          const { JobDone, date, year, month } = doc.data();
          const getDate = new Date();
          if (filter === '') {
            pricee = pricee + parseInt(JobDone.post.price)
            budgett = budgett + parseInt(JobDone.post.budget)
          } else if (filter === '1 Month') {
            if (month === getDate.getMonth() + 1 && year === getDate.getFullYear()) {
              pricee = pricee + parseInt(JobDone.post.price)
              budgett = budgett + parseInt(JobDone.post.budget)
            }
          } else if (filter === '1 Year') {
            if (year === getDate.getFullYear()) {
              pricee = pricee + parseInt(JobDone.post.price)
              budgett = budgett + parseInt(JobDone.post.budget)
            }

          } else if (filter === 'All') {

            pricee = pricee + parseInt(JobDone.post.price)
            budgett = budgett + parseInt(JobDone.post.budget)


          }

        })
        setPrice(pricee)
        setBudget(budgett)
        setProfit(pricee - budgett)

      }).catch((err) => {
        console.log(err)
      })
  }
  const changeFilter = (val) => {
    setFilter(val)
    setUpdate(!update)
  }
  const data = [
    { key: '1', value: '1 Year', },
    { key: '2', value: '1 Month' },
    { key: '2', value: 'All' },
  ]

  const widthAndHeight = 250
  const series = [budget, profit, price]
  const sliceColor = ['#FF0000', '#228b22', '#00008B']

  return (
    <>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'orange' }}>Profit Statistics</Text>
      </View>
      <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 50, alignItems: "center", }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: "black" }}>Filter</Text>
        <View>
          <SelectList
            placeholder='Select'
            setSelected={(val) => changeFilter(val)}
            data={data}
            save="value"
          />
        </View>
      </View>
      {(price === 0 || budget === 0 || profit === 0) ? <View style={{ display: "flex", alignItems: "center", marginTop: 30, flex: 1, justifyContent: 'center' }}>
        <Icon name='folder-text-outline' size={35} color='black' />
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>No Recent Activity</Text>
      </View> : <ScrollView style={{ flex: 1 }}>


        <View style={styles.container}>

          <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', padding: 25 }}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: "center" }}>
              <Entypo name='dot-single' size={23} color='#00008B' />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00008B' }}>{price}£</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: "center" }}>
              <Entypo name='dot-single' size={23} color='#FF0000' />
              <Text style={{ fontSize: 20, color: '#FF0000', fontWeight: 'bold' }}>{budget}£</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: "center" }}>
              <Entypo name='dot-single' size={23} color='#228b22' />
              <Text style={{ fontSize: 20, color: "#228b22", fontWeight: 'bold' }}>{profit}£</Text>
            </View>
          </View>
          {(price === 0 || budget === 0 || profit === 0) ? <ActivityIndicator /> : <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />}
        </View>
        <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', padding: 25 }}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: "center" }}>
            <Entypo name='dot-single' size={23} color='#00008B' />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00008B' }}>Price</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: "center" }}>
            <Entypo name='dot-single' size={23} color='#FF0000' />
            <Text style={{ fontSize: 20, color: '#FF0000', fontWeight: 'bold' }}>Budget</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: "center" }}>
            <Entypo name='dot-single' size={23} color='#228b22' />
            <Text style={{ fontSize: 20, color: "#228b22", fontWeight: 'bold' }}>Profit</Text>
          </View>
        </View>
      </ScrollView>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});

export default Stats