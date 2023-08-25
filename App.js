import { Image, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Components/HomeScreen'
import SettingsScreen from './Components/SettingsScreen'
import { DrawerActions, NavigationContainer } from '@react-navigation/native'
import Program from './Components/Program'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from './Components/About'
import About from './Components/About'
import Login from './Components/Auth/Login'
import { useState } from 'react'
import MyContext from './Components/MyContext'
import SignUp from './Components/Auth/SignUp'
import ResetPassword from './Components/Auth/ResetPassword'
import ProfileSideBar from './Components/ProfileSideBar'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import CurrentConferences from './Components/Screen/CurrentConferences'
import Notification from './Components/Tabs/Notification'
import AdminNotification from './Components/AdminScreens/AdminNotification'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function UserTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
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
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitleAlign: 'center',
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
      {/* <Tab.Screen name="Program" component={Program}/> */}
    </Tab.Navigator>
  )
}

function AdminTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
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
        name="Notification"
        component={Notification}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false
          // headerShown: false,


        }}
      />
      {/* <Tab.Screen name="Program" component={Program}/> */}
    </Tab.Navigator>
  )
}
const profile = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#373a43", height: 90, width: "auto", borderBottomColor: "#373a43 !important", }}>
      <View>
        <View style={{ flexDirection: "row", }}>
          <View>
            <Image source={require("./assets/favicon.png")} style={{ borderRadius: 25, marginLeft: 10 }} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: "#fff" }}> Hi Welcome </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}> Nandu kumar </Text>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  )
}

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(true)

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLogin ? (
          <MyContext.Provider value={{ isLogin, setIsLogin }}>
            <Stack.Navigator screenOptions={{
              contentStyle: { backgroundColor: "#fff" }
            }}>
              <Stack.Screen
                name="Sign in"
                component={Login}
                options={{ headerTitleAlign: "center", headerShadowVisible: false }}
              />
              <Stack.Screen
                name="Sign Up"
                component={SignUp}
                options={{ headerTitleAlign: "center", headerShadowVisible: false }}
              />
              <Stack.Screen
                name="Reset Password"
                component={ResetPassword}
                options={{ headerTitleAlign: "center", headerShadowVisible: false }}
              />
            </Stack.Navigator>
          </MyContext.Provider>
        ) : (
          <Stack.Navigator >
            {isAdmin ?
              <Stack.Screen
                name="Home1"
                component={AdminTabs}
                options={{
                  title: null, headerLeft: () => (profile()), headerStyle: {
                    backgroundColor: "#fff",
                  },
                  // header: () => showHeader && <NoHeader />,
                  headerShadowVisible: false,
                  headerShown: false,
                }}
              // options={{ title: null, headerShown: false}}
              />
              :
              <Stack.Screen
                name="Home1"
                component={UserTabs}
                options={{
                  title: null, headerLeft: () => (profile()), headerStyle: {
                    backgroundColor: "#fff",
                  },
                  // header: () => showHeader && <NoHeader />,
                  headerShadowVisible: false,
                  headerShown: false,
                }}
              // options={{ title: null, headerShown: false}}
              />
            }
            <Stack.Screen name="Program" component={Program} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="CurrentConferences" component={CurrentConferences} options={{
              headerTitle: "October 2023 Conferences"
            }} />
            <Stack.Screen name="Notifications" component={Notification} />
            {/* <MyTabs /> */}
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
