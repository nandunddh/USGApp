import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Platform, StyleSheet, Dimensions } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import * as SecureStore from 'expo-secure-store';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import * as webBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import MyContext from '../MyContext';
import { Feather } from '@expo/vector-icons';
// import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { DB_URL } from '../Constants/Constants';

const { width, height } = Dimensions.get('window');

webBrowser.maybeCompleteAuthSession()

const WebLogin = () => {

  const navigation = useNavigation();
  const [userInfo, setuserInfo] = useState(null)
  const [hidePass, setHidePass] = useState(true);
  const email1 = useRef();
  const password1 = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLogin, setIsLogin, setIsAdmin, isAdmin, setStoredCredentials, storedCredentials, user_email, setUser_email } = useContext(MyContext)

  const [request, response, promtAsync] = Google.useAuthRequest({
    androidClientId:
      '444587957400-2viqkgafr295mhjr4273iokhvm6rk68a.apps.googleusercontent.com',
    // iosClientId: "",
    webClientId:
      '444587957400-tcgkjq43j6p6mudder0f1ko4bkcjq9u5.apps.googleusercontent.com',
    expoClientId: "444587957400-6sd20fm24upuvq7b0a2hegk2ur2b9e5l.apps.googleusercontent.com"
  })

  useEffect(() => {
    console.log("width = ", width);
    if (response?.type === 'success') {
      // handleSignInWithGoogle();
    }
    console.log("isLogin from login === ", isAdmin)
  }, [response, isLogin, isAdmin, email, width])


  const handleLogin = async () => {
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
            if (Response[0].Message == "Success") {
              if ((Response[0].IsAdmin) == "true") {
                alert("Admin Login!");
                setUser_email(email)
                console.log("Admin Login from DB : ", Response[0].IsAdmin);
                navigation.navigate('AdminTab', {
                  screen: 'HomeScreen',
                });
                setIsAdmin(Response[0].IsAdmin);
              }
              else {
                alert(Response[0].Message);
                setUser_email(email)
                navigation.navigate('Web_Tabs', {
                  screen: 'HomeScreen',
                });
              }
            }
            else {
              alert(Response[0].Message);
            }
            if (Response[0].Message == "No account yet") {

            }
          })
          .catch((error) => {
            console.error("ERROR FOUND" + error);
          })
      } catch (error) {
        alert("Fetch Error!")
      }
    }
  }

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={{ flex: 1, alignSelf: "center" }}>
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
                <MaterialCommunityIcons name="email-outline" size={30} color="black" style={{ marginLeft: 15, alignSelf: "center", }} />
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider >
  )
}

export default WebLogin

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
    marginBottom: 30,
    // color: "#838488"
    textAlign: "center"
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