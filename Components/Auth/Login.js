import { View, Text, Button, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../MyContext'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import * as webBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage'

webBrowser.maybeCompleteAuthSession()

//  444587957400-mr03enhtcfps1ahsfmgp87a48fsc86k5.apps.googleusercontent.com
// 444587957400-2viqkgafr295mhjr4273iokhvm6rk68a.apps.googleusercontent.com
const Login = () => {
  const [userInfo, setuserInfo] = useState(null)
  const { isLogin, setIsLogin } = useContext(MyContext)
  const [request, response, promtAsync] = Google.useAuthRequest({
    androidClientId:
      '444587957400-2viqkgafr295mhjr4273iokhvm6rk68a.apps.googleusercontent.com',
    // iosClientId: "",
    webClientId:
      '444587957400-tcgkjq43j6p6mudder0f1ko4bkcjq9u5.apps.googleusercontent.com',
      expoClientId: "444587957400-6sd20fm24upuvq7b0a2hegk2ur2b9e5l.apps.googleusercontent.com"
  })

  // useEffect(() => {
  //   handleSignInWithGoogle();
  // }, [response])

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem('@user')
    if (!user) {
      if (response?.type === 'success') {
        await getUserInfo(response.authentication.accessToken);
        console.log("!user = ", userInfo)
        // setIsLogin(true);
        // alert('Login Success!');
      }
    } else {
      setuserInfo(JSON.parse(user));

      // setIsLogin(true)
      // alert('Login Success!')
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return
    try {
      const response = await fetch(
        // 'https://www.googleapis.com/userinfo/v2/me',
        'https://accounts.google.com/o/oauth2/auth',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )

      const user = await response.json()
      await AsyncStorage.setItem('@user', JSON.stringify(user))
      setuserInfo(user)
    } catch (error) {}
  }

  const insets = useSafeAreaInsets()

  // const login = () => {
  //   setIsLogin(true)
  //   alert('Login Success!')
  // }

  function Login() {
    return (
      <View style={{ flex: 1, paddingTop: insets.top }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../assets/logo.png')} />
        </View>

        <View
          style={{
            marginTop: -10,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          <Text>{JSON.stringify(userInfo, null, 2)}</Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 50,
              marginTop: 40,
              marginBottom: 50,
            }}
          >
            Welcome
          </Text>
          {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}> */}
          {/* <Text style={{ textAlign: 'center', alignItems: 'center' }}> */}
          {/* <AntDesign
            name="google"
            size={24}
            color="white"
            style={{ backgroundColor: 'orange' }}
          /> */}
          <Button
            // onPress={() => login()}
            onPress={() => promtAsync()}
            title="Login Now"
            color="orange"
          />
          <Button
            // onPress={() => login()}
            onPress={() => {
              AsyncStorage.removeItem('@user')
            }}
            title="Remove item"
            color="red"
          />
          {/* </Text> */}
          {/* </View> */}
        </View>
      </View>
    )
  }
  return (
    <SafeAreaProvider>
      <Login />
    </SafeAreaProvider>
  )
}

export default Login
