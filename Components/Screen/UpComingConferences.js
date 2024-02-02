import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MyContext from '../MyContext';
import { Message_data } from '../context';

const UpComingConferences = () => {
  useEffect(() => {
    console.log("notificationDesc", notificationDesc)
  }, [notificationDesc]);

  const { isNotification, setIsNotification } = useContext(MyContext);
  // console.log("first", route.params.description)
  // const [notificationData, setNotificationData] = useState(route.params.description);
  // const { notificationDesc, setNotificationDesc, time, setTime } = useContext(MyContext);

  const [notificationDesc, setNotificationDesc] = useState([
    {
      name: "NextGen Solar(SUN-2023)",
      text: "Hello notification test!!!",
      image: require("../../assets/favicon.png")
    },
    {
      name: "FCT-2023",
      text: "Notification test!!!",
      image: require("../../assets/favicon.png")
    },
    {
      name: "FCT-2023",
      text: "FCT-2023",
      image: require("../../assets/favicon.png")
    },
    {
      name: "NextGen Solar(SUN-2023)",
      text: "Hello notification test!!!",
      image: require("../../assets/favicon.png")
    },
    {
      name: "FCT-2023",
      text: "Notification test!!!",
      image: require("../../assets/favicon.png")
    },
    {
      name: "FCT-2023",
      text: "FCT-2023",
      image: require("../../assets/favicon.png")
    },
    {
      name: "NextGen Solar(SUN-2023)",
      text: "Hello notification test!!!",
      image: require("../../assets/favicon.png")
    },
    {
      name: "FCT-2023",
      text: "Notification test!!!",
      image: require("../../assets/favicon.png")
    },
    {
      name: "FCT-2023",
      text: "FCT-2023",
      image: require("../../assets/favicon.png")
    },
    {
      name: "NextGen Solar(SUN-2023)",
      text: "Hello notification test!!!",
      image: require("../../assets/favicon.png")
    },
    {
      name: "FCT-2023",
      text: "Notification test!!!",
      image: require("../../assets/favicon.png")
    },
    {
      name: "FCT-2023",
      text: "FCT-2023",
      image: require("../../assets/favicon.png")
    },
    {
      name: "NextGen Solar(SUN-2023)",
      text: "Hello notification test!!!",
      image: require("../../assets/favicon.png")
    },
    {
      name: "FCT-2023",
      text: "Notification test!!!",
      image: require("../../assets/favicon.png")
    },
    {
      name: "FCT-2023",
      text: "FCT-2023",
      image: require("../../assets/favicon.png")
    },
  ])
  return (
    <SafeAreaProvider>
        <ScrollView>
          <View>
            {notificationDesc && notificationDesc.map((notificationDesc, index) => {
              return (
                <View style={styles.notificationcontainer} key={index}>
                  <View style={{ width: "20%", }}>
                    <Image source={notificationDesc.image} />
                  </View>
                  <View style={{ width: "60%", }}>
                    <Text style={{ fontWeight: "600", fontSize: 17 }}>{notificationDesc.name} {"\n"}<Text style={{ paddingLeft: 10, fontWeight: "normal", fontSize: 15 }}>{notificationDesc.text}</Text>
                    </Text>
                  </View>
                  <View style={{ width: "20%", paddingHorizontal: 1 }}>
                    {/* <Text>10 53 pm</Text> */}
                    <Text>{notificationDesc.time}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
    </SafeAreaProvider>
  )
}

export default UpComingConferences


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  imageConatiner: {
    alignItems: "center"
    ,
  },
  emptyNotification: {
    alignItems: "center",
    marginTop: 30,
  },
  emptyNotificationText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  notificationcontainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    borderRadius: 25
    // width: 300,
    // justifyContent: "space-between",
  }
})