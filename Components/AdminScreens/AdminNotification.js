import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MyContext from '../MyContext';
import moment from 'moment';
import { SelectList } from 'react-native-dropdown-select-list';
import { Message_data } from '../context';



const AdminNotification = ({ navigation }) => {
  let nextId = 0;
  const [currentDate, setCurrentDate] = useState('');


  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  var sec = new Date().getSeconds();
  const { notificationDesc, setNotificationDesc, isNotification, setIsNotification } = useContext(MyContext);
  const { time, setTime } = useContext(MyContext);
  const [date, setDate] = useState("")
  const [name, setname] = useState([])
  const [text, setText] = useState([])
  const [conferences, setConferences] = useState([
    "SUN-2023",
    "FCT-2023",
    "NDS-2024",
    "CEB-2023",
    "MIT-2023",
    "Physics-2023",
    "CCM-2023",
  ])
  useEffect(() => {
    const date = moment()
      .utcOffset('+05:30')
      .format(' hh:mm a');
    setDate(date);
    console.log("description", notificationDesc)
    console.log("date", date)
  }, [name, notificationDesc, hours, min, sec, date])


  const conferencenames = [
    { key: '1', value: '2023', disabled: true },
    { key: '2', value: 'SUN-2023' },
    { key: '3', value: 'FCT-2023' },
    { key: '4', value: '2024', disabled: true },
    { key: '5', value: 'ENSURE-2024' },
    { key: '6', value: 'CCE-2024' },
    { key: '7', value: 'NDS-2024' },
  ]
  const submit = () => {

    setNotificationDesc(current => [...current, {
      name: name,
      text: text,
      time: date
    }]);
    // setTime( current => [...current, date]);
    setIsNotification(true);
    navigation.navigate("Notification")

  }
  return (
    <SafeAreaProvider style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View>
          <Text>Select conference</Text>
        </View>
        <View style={{paddingVertical: 15,}}>
          <SelectList
            setSelected={(val) => setname(val)}
            data={conferencenames}
            save="value"
            boxStyles
          />
        </View>
        <View style={styles.inputbox}>
          <MaterialIcons name="description" size={30} color="black" style={{ marginRight: 15, marginLeft: 15, alignSelf: "center", }} />
          <TextInput style={styles.textinput} placeholder='Type your conference description' onChangeText={text => setText(text)} />
        </View>
        <View style={{ marginTop: 25, marginBottom: 40 }}>
          {/* <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 22 }}
            onPress={() =>
              navigation.navigate("Notification", {
                description: [...description, {id: nextId++, description: description}],
              })}
              > */}
          <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 22 }} onPress={submit}>
            <Text style={{ color: "#fff", textAlign: "center" }}> SEND NOW </Text>
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
    borderWidth: 0
  },
})