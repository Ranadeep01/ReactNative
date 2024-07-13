import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Auth() {
  const [time, setTime] = useState('00:00')

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
      <View style={css.header}>
        <View style={css.time}>
          <Text style={{color: 'black'}}>{time}</Text>
        </View>
        <View style={css.headerIcons}>
          <View>
          <Image source={require('../icons/network-icon.png')} style={css.icon} />
          </View>
          <View>
          <Image source={require('../icons/wifi-icon.png')} style={css.icon}/>
          </View>
          <View>
          <Image source={require('../icons/battery-icon.png')} style={css.icon}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const css = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: '10%',
  },
  time: {
    flex: 1,
  },
  headerIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'center',
    backgroundColor: 'pink',
    maxHeight: 'auto',
    height: 'auto',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  }
})
