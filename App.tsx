import React, { useState } from 'react'
import Auth from './components/Auth'
import { SafeAreaView, SafeAreaViewComponent, View } from 'react-native'
import  Header  from './components/Header'
import SignUp from './components/SignUp'

function App() {
  const [signIn, setSignIn] = useState(true);

  return (

    <>
      <Header />
      (signIn)?(
        <Auth />
      ):(
        <SignUp />
      )
    </>

  )
}

export default App
