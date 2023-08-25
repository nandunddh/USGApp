import { View, Text, Button, Image, TextInput, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
// import MyContext from '../MyContext'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import * as webBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import MyContext from '../MyContext';
import { Feather } from '@expo/vector-icons';

webBrowser.maybeCompleteAuthSession()

//  444587957400-mr03enhtcfps1ahsfmgp87a48fsc86k5.apps.googleusercontent.com
// 444587957400-2viqkgafr295mhjr4273iokhvm6rk68a.apps.googleusercontent.com
const Login = ({ navigation }) => {
  const [userInfo, setuserInfo] = useState(null)
  const [hidePass, setHidePass] = useState(true);
  const email1 = useRef();
  const password1 = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  // });
  const { isLogin, setIsLogin } = useContext(MyContext)

  // const handleChange = (event = {}) => {
  //   const name = event.target && event.target.name;
  //   const value = event.target && event.target.value;

  //   setData({ [name]: value });
  // }

  const [request, response, promtAsync] = Google.useAuthRequest({
    androidClientId:
      '444587957400-2viqkgafr295mhjr4273iokhvm6rk68a.apps.googleusercontent.com',
    // iosClientId: "",
    webClientId:
      '444587957400-tcgkjq43j6p6mudder0f1ko4bkcjq9u5.apps.googleusercontent.com',
    expoClientId: "444587957400-6sd20fm24upuvq7b0a2hegk2ur2b9e5l.apps.googleusercontent.com"
  })

  useEffect(() => {
    handleSignInWithGoogle();
    // console.log("Data = ", data);
  }, [response, isLogin])

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
      login()
      // setIsLogin(true)
      // alert('Login Success!')
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return
    try {
      const response = await fetch(
        'https://www.googleapis.com/userinfo/v2/me',
        // 'https://accounts.google.com/o/oauth2/auth',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )

      const user = await response.json()
      await AsyncStorage.setItem('@user', JSON.stringify(user))
      setuserInfo(user)
      login()
      alert('Login Success!');
    } catch (error) { }
  }

  const insets = useSafeAreaInsets()

  const login = () => {
    setIsLogin(true)
  }

  const handleLogin = () =>{
    if(email === ""){
      alert("Type your email");
    }
    if(password === ""){
      alert("Type your password");
    }
    if(email === "nandu@test.com" && password === "12345"){
      // alert('Login Success!')
      login()
    }
    else{
      if(email !== "nandu@test.com"){
        alert('Invalid email');
        email1.current.focus();
      }
      else{
        alert('Invalid password');
        password1.current.focus();
      }
    }
    console.log("email = ", email);
    console.log("password = ", password);
  }

  return (
    <SafeAreaProvider>
      <View>

        {/* <View style={{paddingTop: insets.top, paddingHorizontal: 20 }}> */}
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../../assets/logo.png')} />
          </View>

          <View
            style={{
              marginTop: 5,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}
          >
            <Text style={styles.firsttext}>Give credential to sign in your account</Text>
            {/* <Text>{JSON.stringify(userInfo, null, 2)}</Text> */}
            <View style={styles.inputbox}>
              <MaterialCommunityIcons name="email-outline" size={30} color="black" style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", justifyContent: "flex-end" }} />
              <TextInput style={styles.textinput} placeholder='Type your email' clearTextOnFocus={false} defaultValue={email} onChangeText={email => setEmail(email)} ref={email1}/>

            </View>
            <View style={styles.inputbox}>
              <Feather name="lock" size={30} color="black" style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />
              <TextInput style={styles.textinput} placeholder='Type your password' clearTextOnFocus={true} secureTextEntry={hidePass ? true : false} value={password} onChangeText={password => setPassword( password)} ref={password1} />
              {hidePass ?
                <AntDesign name="eye" size={25} color="black" autoCorrect={false} onPress={() => setHidePass(!hidePass)} style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />
                :
                <Entypo name="eye-with-line" size={25} color="black" autoCorrect={false} onPress={() => setHidePass(!hidePass)} style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />

              }

            </View>
            <View>
              <TouchableOpacity onPress={() =>
                navigation.navigate("Reset Password")}>
                <Text style={styles.forgetpassword}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 25, marginBottom: 40 }}>
              <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 22 }} onPress={handleLogin}>
                <Text style={{ color: "#fff", textAlign: "center" }}> SIGN IN </Text>
              </TouchableOpacity>
              {/* <Button title='SIGN IN' color="#000" /> */}
            </View>
          </View>
        </View>
        <View>
          <View style={styles.container}>
            <View style={styles.horizontalLine} />
            <Text style={styles.text}> or continue with </Text>
            <View style={styles.horizontalLine} />
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 40, marginBottom: 50 }}>
            <View style={styles.logos}>
              <FontAwesome5 name="facebook" size={34} color="#1876f2" />
            </View>
            <View style={styles.logos}>
              <FontAwesome name="google" size={34} color="black" onPress={() => promtAsync()} />
            </View>
            <View style={styles.logos}>
              <Fontisto name="apple" size={34} color="black" />
            </View>
          </View>
          <View>
            <Text style={{ textAlign: "center", fontSize: 15 }}> Don't have an account? <Text style={{ color: "#ff6500" }} onPress={() =>
              navigation.navigate('Sign Up')
            }> Sign Up </Text></Text>
          </View>
          {/* <Button
                onPress={() => {
                  AsyncStorage.removeItem('@user')
                }}
                title="Remove item"
                color="red"
              /> */}
        </View>
      </View>
    </SafeAreaProvider>

  )
}

export default Login


const styles = StyleSheet.create({
  inputbox: {
    borderWidth: 1,
    borderColor: "#e1e1e3",
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 20
  },
  firsttext: {
    fontSize: 15,
    marginVertical: 20,
    marginBottom: 30
    // color: "#838488"
  },
  textinput: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    width: "70%"
  },
  forgetpassword: {
    color: "#ff6500",
    textAlign: "right",
    marginVertical: 20
  },
  container: {
    flexDirection: 'row',
    alignItems: "center"
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#bcbaba',
    marginHorizontal: 15
  },
  logos: {
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 25,
    borderRadius: 20,
    borderColor: "#e1e1e3",

  }

})