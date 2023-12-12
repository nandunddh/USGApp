import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Context, { Message_data } from './Components/context'
import Login from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'
import ResetPassword from './Components/Auth/ResetPassword'
import Logout from './Components/Auth/Logout'
import Notification from './Components/Tabs/Notification'
import AdminNotification from './Components/AdminScreens/AdminNotification'
import HomeScreen from './Components/HomeScreen'
import ConferencesList from './Components/Tabs/ConferencesList'
import SettingsScreen from './Components/SettingsScreen'
import MyContext from './Components/MyContext'

const Main = () => {
  const { isAdmin, setIsAdmin, storedCredentials, setStoredCredentials, isLogin, setIsLogin } = useContext(MyContext)

  function UserTabs() {
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
        <Tab.Screen
          name="Events"
          component={ConferencesList}
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false
            // headerShown: false,


          }}
        />
        <Tab.Screen
          name="LogOut"
          component={Logout}
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
        <Tab.Screen
          name="LogOut"
          component={Logout}
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

  return (
    <NavigationContainer>
      {!isLogin ? (
        <Context>

          {/* // <MyContext.Provider value={{ isLogin, setIsLogin, isAdmin, setIsAdmin, storedCredentials, setStoredCredentials }}> */}
          <Stack.Navigator screenOptions={{
            contentStyle: { backgroundColor: "#fff" }
          }}>
            <Stack.Screen
              name="Sign in"
              component={Login}
              // component={SettingsScreen}
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
        </Context>
        // </MyContext.Provider>

      ) : (
        <Context>

          {/* // <MyContext.Provider value={{ notificationDesc, setNotificationDesc, time, setTime, isNotification, setIsNotification, isAdmin, setIsAdmin, storedCredentials, setStoredCredentials, isLogin, setIsLogin, }}> */}
          <Stack.Navigator >
            {isAdmin ?
              <Stack.Screen
                name="AdminTab"
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
                name="UserTab"
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
            <Stack.Screen name="Polymers-2023" component={PolymersScreen} />
            <Stack.Screen name="Pdf Screen" component={PdfScreen} />
            <Stack.Screen name="About Conference" component={AboutConference} options={{
              headerTitleAlign: "center",
            }} />
            <Stack.Screen name="ConferenceScreen" component={ConferenceScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
          {/* </MyContext.Provider> */}
        </Context>

      )
      }
    </NavigationContainer >
  )
}

export default Main