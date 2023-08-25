import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AdminNotification = ({navigation}) => {
  const [description, setDescription] = useState([])
  const [conferences, setConferences] = useState([
    "SUN-2023",
    "FCT-2023",
    "NDS-2024",
    "CEB-2023",
    "MIT-2023",
    "Physics-2023",
    "CCM-2023",
  ])
  return (
    <SafeAreaProvider style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View>
          <Text>Select conference</Text>
        </View>
        <View style={styles.inputbox}>
          <MaterialIcons name="description" size={30} color="black" style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />
          <TextInput style={styles.textinput} placeholder='Type your confirm password' onChangeText={description => setDescription(description)} />
        </View>
        <View style={{ marginTop: 25, marginBottom: 40 }}>
          <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 22 }} onPress={()=> navigation.navigate("Notification",{
            Description: description, 
          })}>
            <Text style={{ color: "#fff", textAlign: "center" }}> SIGN IN </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  )
}

export default AdminNotification

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  inputbox: {
    borderWidth: 1,
    borderColor: "#e1e1e3",
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 20
  },
  textinput: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "70%"
  },
})