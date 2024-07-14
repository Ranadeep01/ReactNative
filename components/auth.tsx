import React, { useState } from 'react'
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Auth() {
  const [time, setTime] = useState('00:00')

  function alert(arg0: string): void {
    throw new Error('Function not implemented.')
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
      <View style={css.header}>
        <View style={css.time}>
          <Text style={{color: 'black'}}>{time}</Text>
        </View>
        <View style={css.headerIcons}>
          <Image source={require('../icons/network-icon.png')} style={css.icon} />
          <Image source={require('../icons/wifi-icon.png')} style={css.icon}/>
          <Image source={require('../icons/battery-icon.png')} style={css.icon}/>
        </View>
      </View>
      <View style={css.container}>
        <Text style={{color: 'black', fontSize: 20 }}> sign in to your account </Text>
        <View style={{display: 'flex', justifyContent: 'flex-start'}}>
          <Text style={css.tag}> Email </Text>
        </View>
        <TextInput placeholder='ex: email@gmail.com' style={css.input} />
        <Text style={css.tag}> Password </Text>
        <TextInput placeholder='********' secureTextEntry style={css.input} />
        <TouchableOpacity style={css.button}>
          <Text>SIGN IN</Text>
        </TouchableOpacity>
        <Text style={css.tag}>or sign in with</Text>
        <Text style={css.tag}> Don't have an account?{' '}
          <TouchableOpacity onPress={() => Alert.alert('Navigate to Sign Up screen')}>
            <Text style={css.changeAuth}>SIGN UP</Text>
          </TouchableOpacity>
        </Text>  
        <View style={css.altIcons}>
          <View style={css.altIcon}>
            <Image source={require('../icons/google-icon.png')} />
          </View>
          <View style={css.altIcon}>
            <Image source={require('../icons/google-icon.png')} />
          </View>
          <View style={css.altIcon}>
            <Image source={require('../icons/google-icon.png')} />
          </View>
        </View>    
      </View>
    </SafeAreaView>
  )
}

const css = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: '10%',
    backgroundColor: 'pink',
  },
  time: {
    flex: 1,
  },
  headerIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'pink',
    maxHeight: 'auto',
    height: 'auto',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  input: {
    width: '80%',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  tag: {
    // display: 'flex',
    color: '#6F6F6F',
  },
  button: {
    backgroundColor: '#00B140',
    width: '80%',
    height: 'auto',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 20,
  },
  changeAuth: {
    color: '#00B140',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  altIcons: {
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  altIcon: {
    display: 'flex',
    backgroundColor: '#F4F4F4',
    width: 86,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
