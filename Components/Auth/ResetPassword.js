import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context'

const ResetPassword = () => {
  return (
    <SafeAreaProvider>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ marginVertical: 10, fontSize: 17 }}>Please enter your email address to request a password rest</Text>
        <View>
          <View style={styles.inputbox}>
            <View style={{ flex: 1 }}>
              <TextInput style={styles.textinput} placeholder='Type your email' clearTextOnFocus={true} />
            </View>
            <MaterialCommunityIcons name="email-outline" size={30} color="black" style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", justifyContent: "flex-end" }} />
          </View>
          <View style={{ marginTop: 25, marginBottom: 40 }}>
            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 22 }} >
              <Text style={{ color: "#fff", textAlign: "center" }}> RESET </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
  inputbox: {
    borderWidth: 1,
    borderColor: "#e1e1e3",
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20
    // justifyContent: "flex-start"
  },
  textinput: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    // width: "80%"
  },
})