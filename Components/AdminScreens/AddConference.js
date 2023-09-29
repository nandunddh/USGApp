import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
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
import { SelectList } from 'react-native-dropdown-select-list';

const AddConference = ({ navigation }) => {

  const conferencenames = [
    { key: '1', value: '2023' },
    { key: '2', value: 'SUN-2023' },
    { key: '3', value: 'FCT-2023' },
    { key: '4', value: '2024' },
    { key: '5', value: 'ENSURE-2024' },
    { key: '6', value: 'CCE-2024' },
    { key: '7', value: 'NDS-2024' },
  ]

  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={{ paddingHorizontal: 20, flex: 1, paddingVertical: 20, backgroundColor: "#fff" }}>
          <View style={styles.inputbox}>
            <TextInput style={styles.textinput} placeholder='Type conference name' clearTextOnFocus={false} />

          </View>
          <View style={styles.inputbox}>
            <TextInput style={styles.textinput} placeholder='Type conference title' clearTextOnFocus={false} />

          </View>
          <View style={styles.inputbox}>
            <TextInput style={styles.textinput} placeholder='Type conference URL' clearTextOnFocus={true} />
          </View>
          <View style={styles.inputbox}>
            <TextInput style={styles.textinput} placeholder='Type conference venu' clearTextOnFocus={true}/>
          </View>
          <View style={styles.inputbox}>
            <TextInput style={styles.textinput} placeholder='Type conference month' clearTextOnFocus={true}/>
          </View>
          <View style={styles.inputbox}>
            <TextInput style={styles.textinput} placeholder='Type conference date' clearTextOnFocus={true}/>
          </View>
          <View style={styles.inputbox}>
            <TextInput style={styles.textinput} placeholder='Type conference hottel address' clearTextOnFocus={true}/>
          </View>
          <View style={styles.inputbox}>
            <TextInput style={styles.textinput} placeholder='Type conference about in short' clearTextOnFocus={true}/>
          </View>
          <View style={styles.inputbox}>
            <TextInput style={styles.textinput} placeholder='Type conference about' clearTextOnFocus={true}/>
          </View>
          <View style={styles.inputbox}>
            <TextInput style={styles.textinput} placeholder='Type conference latitude' clearTextOnFocus={true}/>
          </View>
          <View style={styles.inputbox}>
            <TextInput style={styles.textinput} placeholder='Type conference longitude' clearTextOnFocus={true}/>
          </View>

          <SelectList
            setSelected={(val) => setname(val)}
            data={conferencenames}
            save="value"
            placeholder="Select Category"
          />
          <View style={{ marginTop: 25, marginBottom: 40 }}>
            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 22 }} >
              <Text style={{ color: "#fff", textAlign: "center" }}> SIGN IN </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default AddConference

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
    fontSize: 20,
    marginVertical: 20,
    marginBottom: 40
    // color: "#838488"
  },
  textinput: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    // width: "60%"
    flex: 5
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