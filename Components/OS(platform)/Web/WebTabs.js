import { SafeAreaProvider } from "react-native-safe-area-context";
import AddConference from "../../AdminScreens/AddConference";
import Notification from "../../Tabs/Notification";
import WebHomeScreen from "../../WebHomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text, View } from "react-native";
import MyContext from "../../MyContext";
import { useContext } from "react";
import HomeScreen from "../../HomeScreen";


const Tab = createBottomTabNavigator()

const WebTabs = () => {
  const { isLogin, setIsLogin, setIsAdmin, isAdmin, setStoredCredentials, storedCredentials, user_email, setUser_email } = useContext(MyContext)
  const profile = () => {
    return (
      <SafeAreaProvider style={{ backgroundColor: "#373a43", height: 90, width: "auto", borderBottomColor: "#373a43 !important", paddingTop: 5 }}>
        <View>
          <View style={{ flexDirection: "row", }}>
            <View>
              <Image source={require("../../../assets/favicon.png")} style={{ borderRadius: 25, marginLeft: 10 }} />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: "#fff" }}> Hi Welcome </Text>
              <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>{user_email}</Text>
            </View>
          </View>
        </View>
      </SafeAreaProvider>
    )
  }
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: null,
          title: " ",
          headerShadowVisible: false,
          headerLeft: () => (profile()), headerStyle: {
            backgroundColor: "#373a43",
          },
          headerStyle: {
            backgroundColor: "#373a43"
          }
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false
          // headerShown: false,


        }}
      />
      {/* <Tab.Screen
        name="Events"
        component={ConferencesList}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false
          // headerShown: false,


        }}
      /> */}
      <Tab.Screen
        name="CreateConference"
        component={AddConference}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false
          // headerShown: false,


        }}
      />
      {/* <Tab.Screen
        name="List"
        component={ConferencesList}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false
          // headerShown: false,


        }}
      /> */}
      {/* <Tab.Screen name="Program" component={Program}/> */}
    </Tab.Navigator>
  )
}

export default WebTabs