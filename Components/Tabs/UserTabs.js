import ConferencesList from '../Tabs/ConferencesList'
import AddConference from "../AdminScreens/AddConference"
import HomeScreen from "../HomeScreen"
import Notification from "./Notification"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Image, Platform, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ImageUpload from '../ImageUpload'
import Conf_update from '../AdminScreens/Conf_update'
import Profile from './Profile'
import CurrentConferences from '../Screen/CurrentConferences'
import { useContext } from 'react'
import MyContext from '../MyContext'
import Logout from '../Auth/Logout'
import { useEffect } from 'react'
import * as SecureStore from 'expo-secure-store';

const Tab = createBottomTabNavigator()


const UserTabs = () => {
  const { storedCredentials } = useContext(MyContext);

  useEffect(() => {
    // alert(JSON.stringify(storedCredentials));
    // getStoredCredentials()
  }, [storedCredentials])
  
  const profile = () => {
    return (
      <SafeAreaProvider style={{ backgroundColor: "#373a43", height: 90, width: "auto", borderBottomColor: "#373a43 !important", paddingTop: 5 }}>
        <View>
          <View style={{ flexDirection: "row", }}>
            <View>
              <Image source={require("../../assets/favicon.png")} style={{ borderRadius: 25, marginLeft: 10 }} />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: "#fff" }}> Hi Welcome </Text>
              {
                storedCredentials ?
                  <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>{storedCredentials.username}</Text>
                  :
                  <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>No Name</Text>
              }
            </View>
          </View>
        </View>
      </SafeAreaProvider>
    )
  }
  return (
    <Tab.Navigator>
      {Platform.OS == "web" ?
        <>
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
            name="CreateConference"
            component={AddConference}
            options={{
              headerTitleAlign: "center",
              headerShadowVisible: false
              // headerShown: false,


            }}
          />
        </>
        :
        <>
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerTitle: null,
              title: " ",
              headerShown: false,
              // headerLeft: () => (profile()), headerStyle: {
              //   backgroundColor: "#373a43",
              // },
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
          <Tab.Screen
            name="CurrentConferences"
            component={CurrentConferences}
            options={{
              headerTitleAlign: "center",
              headerShadowVisible: false
              // headerShown: false,


            }}
          />

          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTitleAlign: "center",
              headerShadowVisible: false
              // headerShown: false,


            }}
          />
          <Tab.Screen
            name="Logout"
            component={Logout}
            options={{
              headerTitleAlign: "center",
              headerShadowVisible: false
              // headerShown: false,


            }}
          />
          {/* <Tab.Screen name="Program" component={Program}/> */}
        </>
      }
    </Tab.Navigator >

  )
}
export default UserTabs