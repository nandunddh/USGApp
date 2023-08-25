import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Notification = ({route}) => {
  const [notification, setNotification] = useState(true);
  // const [notificationData, setNotificationData] = useState(route.params.Description)
  // const [notificationData, setNotificationData] = useState([
  //   {
  //     name: "NextGen Solar(SUN-2023)",
  //     text: "Hello notification test!!!",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "FCT-2023",
  //     text: "Notification test!!!",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "FCT-2023",
  //     text: "FCT-2023",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "NextGen Solar(SUN-2023)",
  //     text: "Hello notification test!!!",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "FCT-2023",
  //     text: "Notification test!!!",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "FCT-2023",
  //     text: "FCT-2023",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "NextGen Solar(SUN-2023)",
  //     text: "Hello notification test!!!",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "FCT-2023",
  //     text: "Notification test!!!",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "FCT-2023",
  //     text: "FCT-2023",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "NextGen Solar(SUN-2023)",
  //     text: "Hello notification test!!!",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "FCT-2023",
  //     text: "Notification test!!!",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "FCT-2023",
  //     text: "FCT-2023",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "NextGen Solar(SUN-2023)",
  //     text: "Hello notification test!!!",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "FCT-2023",
  //     text: "Notification test!!!",
  //     image: require("../../assets/favicon.png")
  //   },
  //   {
  //     name: "FCT-2023",
  //     text: "FCT-2023",
  //     image: require("../../assets/favicon.png")
  //   },
  // ])
  return (
    <SafeAreaProvider>
      {notification ?
        <ScrollView>
          <View>
            {notificationData && notificationData.map((notificationData, index) => {
              return (
                <View style={styles.notificationcontainer} key={index}>
                  <View style={{ width: "20%", }}>
                    <Image source={notificationData.image} />
                  </View>
                  <View style={{ width: "60%", }}>
                    <Text style={{ fontWeight: "600", fontSize: 17 }}>{notificationData.name} {"\n"}<Text style={{ paddingLeft: 10, fontWeight: "normal", fontSize: 15 }}>{notificationData.text}</Text>
                    </Text>
                  </View>
                  <View style={{ width: "20%", paddingHorizontal: 1 }}>
                    <Text>10.15 pm</Text>
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
        :
        <View style={styles.container}>
          <View style={styles.imageConatiner}>
            <Image source={require("../../assets/emptyNotification.jpg")} />
          </View>
          <View style={styles.emptyNotification}>
            <Text style={styles.emptyNotificationText}>Ups! There is no notification</Text>
          </View>
        </View>
      }
    </SafeAreaProvider>
  )
}

export default Notification


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
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