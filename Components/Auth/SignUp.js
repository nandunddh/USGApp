import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const SignUp = ({ navigation }) => {
  const [hidePass, setHidePass] = useState(true);
  const [confhidePass, setConfHidePass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaProvider>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ marginVertical: 20 }}>Create account and enjoy all services</Text>
        <View style={styles.inputbox}>
          <MaterialCommunityIcons name="account-outline" size={34} color="#000" style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />
          <TextInput style={styles.textinput} placeholder='Type your full name' clearTextOnFocus={false} />

        </View>
        <View style={styles.inputbox}>
          <MaterialCommunityIcons name="email-outline" size={30} color="black" style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", justifyContent: "flex-end" }} />
          <TextInput style={styles.textinput} placeholder='Type your email' clearTextOnFocus={false} />

        </View>
        <View style={styles.inputbox}>
          <Feather name="lock" size={30} color="black" style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />
          <TextInput style={styles.textinput} placeholder='Type your password' clearTextOnFocus={true} secureTextEntry={hidePass ? true : false} />
          {hidePass ?
            <AntDesign name="eye" size={25} color="black" autoCorrect={false} onPress={() => setHidePass(!hidePass)} style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />
            :
            <Entypo name="eye-with-line" size={25} color="black" autoCorrect={false} onPress={() => setHidePass(!hidePass)} style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />

          }

        </View>
        <View style={styles.inputbox}>
          <Feather name="lock" size={30} color="black" style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />
          <TextInput style={styles.textinput} placeholder='Type your confirm password' clearTextOnFocus={true} secureTextEntry={confhidePass ? true : false} />
          {confhidePass ?
            <AntDesign name="eye" size={25} color="black" autoCorrect={false} onPress={() => setConfHidePass(!confhidePass)} style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />
            :
            <Entypo name="eye-with-line" size={25} color="black" autoCorrect={false} onPress={() => setConfHidePass(!confhidePass)} style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />

          }

        </View>
        <View style={{ marginTop: 25, marginBottom: 40 }}>
          <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 22 }} >
            <Text style={{ color: "#fff", textAlign: "center" }}> SIGN IN </Text>
          </TouchableOpacity>
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
            <Text style={{ textAlign: "center", fontSize: 15 }}> Already have an account? <Text style={{ color: "#ff6500" }} onPress={() =>
              navigation.navigate('Sign in')
            }> Sign In </Text></Text>
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

export default SignUp

const styles = StyleSheet.create({
  inputbox: {
    borderWidth: 1,
    borderColor: "#e1e1e3",
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 20
  },
  firsttext: {
    fontSize: 20,
    marginVertical: 20,
    marginBottom: 40
    // color: "#838488"
  },
  textinput: {
    paddingHorizontal: 10,
    paddingVertical: 15,
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