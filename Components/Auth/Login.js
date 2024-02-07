import { View, Text, Button, Image, TextInput, StyleSheet, Touchable, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import * as SecureStore from 'expo-secure-store';
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
import axios from 'axios';
import { Message_data } from '../context';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { DB_URL } from '../Constants/Constants';
import WebLogin from './WebLogin';


webBrowser.maybeCompleteAuthSession()

//  444587957400-mr03enhtcfps1ahsfmgp87a48fsc86k5.apps.googleusercontent.com
// 444587957400-2viqkgafr295mhjr4273iokhvm6rk68a.apps.googleusercontent.com
const Login = () => {
  const navigation = useNavigation();
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
  const { isLogin, setIsLogin, setIsAdmin, isAdmin, setStoredCredentials, storedCredentials, user_email, setUser_email, user_name, setUser_name } = useContext(MyContext)

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
    console.log(Platform.OS);
    if (response?.type === 'success') {
      handleSignInWithGoogle();
    }
    // console.log("Data = ", response);
    // SplashScreen.hide();

    getStoredCredentials();
    console.log("isLogin from login === ", isAdmin)
  }, [response, isLogin, isAdmin, email, storedCredentials, user_name])

  // async function handleSignInWithGoogle() {
  //   const user = await AsyncStorage.getItem('@user')
  //   if (!user) {
  //     if (response?.type === 'success') {
  //       await getUserInfo(response.authentication.accessToken);
  //       console.log("!user = ", userInfo)
  //       // setIsLogin(true);
  //       // alert('Login Success!');
  //     }
  //   } else {
  //     setuserInfo(JSON.parse(user));
  //     login()
  //     // setIsLogin(true)
  //     // alert('Login Success!')
  //   }
  // }

  // const getUserInfo = async (token) => {
  //   if (!token) return
  //   try {
  //     const response = await fetch(
  //       'https://www.googleapis.com/userinfo/v2/me',
  //       // 'https://accounts.google.com/o/oauth2/auth',
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       },
  //     )

  //     const user = await response.json()
  //     await AsyncStorage.setItem('@user', JSON.stringify(user))
  //     setuserInfo(user)
  //     login()
  //     alert('Login Success!');
  //   } catch (error) { }
  // }

  // const insets = useSafeAreaInsets()

  // const login = () => {
  //   setIsLogin(true)
  //   if (email === "nandu@admin.com") {
  //     setIsAdmin(true)
  //   }
  // }
  // const handleLogin = () => {
  //   if ((email.length == 0) || (password.length == 0)) {
  //     alert("Required Field Is Missing!!!");
  //   } else {
  //     var APIURL = "http://127.0.0.1:8000/login.php";

  //     var headers = {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     };

  //     var Data = {
  //       Email: email,
  //       Password: password
  //     };

  //     fetch(APIURL, {
  //       method: 'POST',
  //       headers: headers,
  //       body: JSON.stringify(Data)
  //     })
  //       .then((Response) => Response.json())
  //       .then((Response) => {
  //         alert(Response[0].Message)
  //         if (Response[0].Message == "Success") {
  //           console.log("true")
  //           login()
  //           // navigation.navigate("HomeScreen");
  //         }
  //         console.log(Data);
  //       })
  //       .catch((error) => {
  //         console.error("ERROR FOUND" + error);
  //       })
  //   }


  // }

  const getStoredCredentials = async () => {
    try {
      const storedEmail = await SecureStore.getItemAsync('email');
      const storedPassword = await SecureStore.getItemAsync('password');
      // const storedisAdmin = await SecureStore.getItemAsync('isAdmin');
      if (storedEmail && storedPassword) {
        setStoredCredentials({ email: storedEmail, password: storedPassword });
        if (storedEmail === "nandu@test.com") {
          // navigation.navigate('HomeScreen');
          navigation.navigate('UserTab', {
            screen: 'HomeScreen',
          });
        }
        else if (storedEmail === "admin@test.com") {
          navigation.navigate('AdminTab', {
            screen: 'HomeScreen',
          });
        }
        // setIsLogin(true);
        // if (storedisAdmin === "true") {
        //   setIsAdmin(true);
        // }
        // {storeCredentials && 
        // navigation.navigate("") }

        console.log('Stored Credentials Login Screen:', { email: storedEmail, password: storedPassword });
      } else {
        console.log('No credentials found.');
      }
    } catch (error) {
      console.error('Error retrieving credentials:', error);
    }
  }
  // Function to store credentials
  const storeCredentials = async () => {
    try {
      const emailString = String(email);
      const passwordString = String(password);
      // const isAdminString = String(isAdmin);
      await SecureStore.setItemAsync('email', emailString);
      await SecureStore.setItemAsync('password', passwordString);
      // await SecureStore.setItemAsync('isAdmin', isAdminString);
      // getStoredCredentials()
      // login()
      navigation.navigate('UserTab', {
        screen: 'HomeScreen',
      });
      // navigation.navigate("HomeScreen");
      console.log('Credentials stored successfully. And Isadmin = ', isAdminString);
    } catch (error) {
      console.error('Error storing credentials:', error);
    }
  }


  const handleLogin = async () => {
    // const abortController = new AbortController();
    if (email.length == 0) {
      alert("Type your email");
      email1.focus()
    }
    else if (password.length == 0) {
      alert("Type your password");
    }
    else {
      try {
        // var APIURL = `http://localhost:8081/SERVER(backend)/login.php`;
        var APIURL = `${DB_URL}login.php`;
        // var APIURL = "http://127.0.0.1:8000/USG/login.php";

        var headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        };

        var Data = {
          Email: email,
          // isAdmin: isAdmin,
          Password: password
        };

        fetch(APIURL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(Data)
        })
          .then((Response) => Response.json())
          .then((Response) => {
            console.log("Login ===", Response);
            if (Response[0].Message == "Success") {
              console.log("Login", Response)
              // console.log("Login true =============")
              // if (Platform.OS == "web") {
              //   if ((Response[0].IsAdmin) == "true") {
              //     alert("Admin Login!");
              //     setUser_email(email)
              //     console.log("Admin Login from DB : ", Response[0].IsAdmin);
              //     navigation.navigate('WebAdminTab', {
              //       screen: 'HomeScreen',
              //     });
              //     setIsAdmin(Response[0].IsAdmin);
              //     // storeCredentials()
              //   }
              //   else {
              //     alert(Response[0].Message);
              //     setUser_email(email)
              //     navigation.navigate('Web_Tabs', {
              //       screen: 'HomeScreen',
              //     });
              //   }
              // }
              // else {
              //   storeCredentials()
              // }
              alert(Response[0].Message);
              setUser_name(Response[0].User_Name)
              storeCredentials()
            }
            else {
              alert(Response[0].Message);
            }
            if (Response[0].Message == "No account yet") {
              // console.log("Login true =============")
              // email1.clear();
              // password1.clear();

              // storeCredentials()
            }
            console.log("Data", Data);
          })
          .catch((error) => {
            console.error("ERROR FOUND" + error);
          })
      } catch (error) {
        alert("Fetch Error!")
      }
    }
    console.log("input email = ", email);
    console.log("input password = ", password);

  }

  return (
    <SafeAreaProvider>
      <ScrollView>
        {Platform.OS == "web" ?
          <WebLogin />
          :
          <View style={{ flex: 1 }}>
            {/* <View style={{paddingTop: insets.top, paddingHorizontal: 20 }}> */}
            <View style={{ paddingHorizontal: 20, }}>
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
                  <TextInput style={styles.textinput} placeholder='Type your email' clearTextOnFocus={false} defaultValue={email} onChangeText={email => setEmail(email)} ref={email1} />

                </View>
                <View style={styles.inputbox}>
                  <Feather name="lock" size={30} color="black" style={{ marginLeft: 15, alignSelf: "center", flex: 1 }} />
                  <TextInput style={styles.textinput} placeholder='Type your password' clearTextOnFocus={false} secureTextEntry={hidePass ? true : false} value={password} onChangeText={password => setPassword(password)} ref={password1} />
                  {hidePass ?
                    <AntDesign name="eye" size={25} color="black" autoCorrect={false} onPress={() => setHidePass(!hidePass)} style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", marginEnd: 10 }} />
                    :
                    <Entypo name="eye-with-line" size={25} color="black" autoCorrect={false} onPress={() => setHidePass(!hidePass)} style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", marginEnd: 10 }} />

                  }

                </View>
                <View>
                  <TouchableOpacity onPress={() =>
                    navigation.navigate("Reset_Password")}>
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
            <View style={{ marginBottom: 20, }}>
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
                <Text style={{ textAlign: "center", fontSize: 15, }}> Don't have an account? <Text style={{ color: "#ff6500" }} onPress={() =>
                  navigation.navigate('Sign_Up')
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
        }
      </ScrollView>
    </SafeAreaProvider >
  )
}

export default Login


const styles = StyleSheet.create({
  inputbox: {
    borderWidth: 1,
    borderColor: "#e1e1e3",
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 20,
    flex: 1,
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
    // width: "55%"
    flex: 6
  },
  forgetpassword: {
    color: "#ff6500",
    textAlign: "right",
  },
  container: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 20,
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
