import React, { useState } from 'react'
import { GestureResponderEvent, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUp() {
    // const [signIn, setSignIn] = useState(false);

    const changeAuth=()=>{
        // setSignIn(true)
    }
  
    return (
      <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
        <View style={css.container}>
          <Text style={{color: 'black', fontSize: 27, paddingBottom: 20 }}> Create Your account </Text>
          <View style={{display: 'flex', width: '80%', paddingBottom: 5}}>
            <Text style={css.tag}> Name: </Text>
          </View>
          <TextInput placeholder='ex: ranadeep bashetty' style={css.input} />
          <View style={{display: 'flex', width: '80%', paddingBottom: 5}}>
            <Text style={css.tag}> Email: </Text>
          </View>
          <TextInput placeholder='ex: email@gmail.com' style={css.input} />
          <View style={{display: 'flex', width: '80%', paddingBottom: 5}}>
            <Text style={css.tag}> Password: </Text>
          </View>
          <TextInput placeholder='********' secureTextEntry style={css.input} />
          <View style={{display: 'flex', width: '80%', paddingBottom: 5}}>
            <Text style={css.tag}>Confirm Password: </Text>
          </View>
          <TextInput placeholder='********' secureTextEntry style={css.input} />
          <TouchableOpacity style={css.button}>
            <Text>SIGN Up</Text>
          </TouchableOpacity>
          <Text style={[css.tag, {paddingTop: 20}]}>or sign up with</Text>
          <View style={[css.alt, {paddingTop: 20}]}>
            <View style={css.altIcons}>
              <Image source={require('../icons/google-icon.png')}  />
            </View>
            <View style={css.altIcons}>
              <Image source={require('../icons/fb-icon.png')}  />
            </View>
            <View style={css.altIcons}>
              <Image source={require('../icons/x-icon.png')}  />
            </View>
          </View>  
          <View style={[css.center, css.flexRow, {paddingTop: 20, gap: 5}]}>
            <Text style={css.tag}>Have an account?</Text>
            <TouchableOpacity onPress={changeAuth} >  
              <Text style={[css.tag, {textDecorationLine: 'underline'}]}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const css = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: '80%',
      backgroundColor: '#a4a4a4',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
      color: '#ffffff',
    },
    tag: {
      color: '#6F6F6F',
      textAlign: 'left',
    },
    button: {
      backgroundColor: '#00B140',
      width: '80%',
      height: 'auto',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 12,
      marginTop: 20,
      
    },
    changeAuth: {
      color: '#00B140',
    },
    alt: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '80%',
      gap: 5,
    },
    altIcons: {
      display: 'flex',
      backgroundColor: '#F4F4F4',
      height: 42,
      width: 86,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    flexRow: {
      flexDirection: 'row',
    }
  });
  