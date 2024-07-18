import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Header() {
  const [time, setTime] = useState('00:00');

  return (
    <View style={css.header}>
        <View style={css.time}>
            <Text style={{color: 'black'}}>{time}</Text>
        </View>
        <View style={[css.center, css.flexRow]}>
            <Image source={require('../icons/network-icon.png')} style={css.icon} />
            <Image source={require('../icons/wifi-icon.png')} style={css.icon}/>
            <Image source={require('../icons/battery-icon.png')} style={css.icon}/>
        </View>
    </View>
  )
}

const css = StyleSheet.create({
    header: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: '10%',
      backgroundColor: 'white',
    },
    time: {
      flex: 1,
    },
    headerIcons: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: 'pink',
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 2,
    },
    flexRow: {
        flexDirection: 'row',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
