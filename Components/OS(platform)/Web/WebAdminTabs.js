import { SafeAreaProvider } from "react-native-safe-area-context"
import AddConference from "../../AdminScreens/AddConference"
import HomeScreen from "../../HomeScreen"
import Notification from "../../Tabs/Notification"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text, View } from "react-native"
import AdminNotification from "../../AdminScreens/AdminNotification"
import Logout from "../../Auth/Logout"
import WebHomeScreen from "../../WebHomeScreen"
import MyContext from "../../MyContext"
import { useContext, useEffect } from "react"
import Test from "../../Test"

const Tab = createBottomTabNavigator()

const WebAdminTabs = () => {
  const { isLogin, setIsLogin, setIsAdmin, isAdmin, setStoredCredentials, storedCredentials, user_email, setUser_email } = useContext(MyContext)

  useEffect(() => {
    console.log(user_email)
  }, [])
  

  const profile = () => {
    return (
      <SafeAreaProvider style={{ backgroundColor: "#373a43", height: 90, width: "auto", borderBottomColor: "#373a43 !important", paddingTop: 5 }}>
        <View>
          <View style={{ flexDirection: "row", }}>
            <View>
              <Image source={require("../../../assets/favicon.png")} style={{ borderRadius: 25, marginLeft: 10 }} />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: "#fff" }}> Hi Welcome WebAdminTab </Text>
              {
                user_email ?
                <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>{user_email}</Text>
                :
                <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>Nandu Kumar</Text>
              }
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
        component={WebHomeScreen}
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
      {/* <Tab.Screen
        name="Image"
        component={UploadData}
        options={{
          headerTitleAlign: "center",
          // headerShadowVisible: false,
          title: "Notification",
          headerTitle: "Create Notifications",
          // headerShown: false,



        }}
      /> */}
      <Tab.Screen
        name="Create Notifications"
        component={AdminNotification}
        options={{
          headerTitleAlign: "center",
          // headerShadowVisible: false,
          title: "Notification",
          headerTitle: "Create Notifications",
          // headerShown: false,



        }}
      />
      <Tab.Screen
        name="Create Conference"
        component={AddConference}
        options={{
          headerTitleAlign: "center",
          // headerShadowVisible: false,
          title: "Create Conference",
          headerTitle: "Create Conference",
          // headerShown: false,



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
      <Tab.Screen
        name="test"
        component={Test}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false
          // headerShown: false,


        }}
      />
      {/* <Tab.Screen
        name="LogOut"
        component={Logout}
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

export default WebAdminTabs