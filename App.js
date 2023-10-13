
import { Image, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Components/HomeScreen'
import SettingsScreen from './Components/SettingsScreen'
import { NavigationContainer } from '@react-navigation/native'
import Program from './Components/Program'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from './Components/About'
import About from './Components/About'
import Login from './Components/Auth/Login'
import { useContext, useEffect, useRef, useState } from 'react'
import MyContext from './Components/MyContext'
import SignUp from './Components/Auth/SignUp'
import ResetPassword from './Components/Auth/ResetPassword'
import ProfileSideBar from './Components/ProfileSideBar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CurrentConferences from './Components/Screen/CurrentConferences'
import Notification from './Components/Tabs/Notification'
import AdminNotification from './Components/AdminScreens/AdminNotification'

// import Platform from '../node_modules'

import * as Device from 'expo-device';
import * as SecureStore from 'expo-secure-store';
import * as Notifications from 'expo-notifications';
import Constants from "expo-constants";
import PolymersScreen from './Components/Screen/PolymersScreen'
import ConferencesList from './Components/Tabs/ConferencesList'
import ConferenceScreen from './Components/Screen/ConferenceScreen'
import AboutConference from './Components/Screen/AboutConference'
import PdfScreen from './Components/Screen/PdfScreen'
import Logout from './Components/Auth/Logout'
import { nfData, notificationDes } from './Components/Data/data'
import Context, { Message_data } from './Components/context'
import AddConference from './Components/AdminScreens/AddConference'
import UploadData from './Components/AdminScreens/UploadData'
import UploadImage from './Components/AdminScreens/UploadData'
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

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
      {/* <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false
          // headerShown: false,


        }}
      /> */}
      <Tab.Screen
        name="Image"
        component={UploadImage}
        options={{
          headerTitleAlign: "center",
          // headerShadowVisible: false,
          title: "Notification",
          headerTitle: "Create Notifications",
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
        name="Image"
        component={UploadData}
        options={{
          headerTitleAlign: "center",
          // headerShadowVisible: false,
          title: "Notification",
          headerTitle: "Create Notifications",
          // headerShown: false,



        }}
      />
      {/* <Tab.Screen
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
      /> */}
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

// Notifications start //
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Can use this function below or use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });

    console.log(token);
  } else {
    console.log(token);
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}



export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  // const {isAdmin, setIsAdmin, storedCredentials, setStoredCredentials, isLogin, setIsLogin} = useContext(Message_data)

  const [isLogin, setIsLogin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isNotification, setIsNotification] = useState(false)
  const [storedCredentials, setStoredCredentials] = useState(null);
  const [notificationDesc, setNotificationDesc] = useState(nfData)
  const [time, setTime] = useState([])

  const getStoredCredentials = async () => {
    try {
      const storedEmail = await SecureStore.getItemAsync('email');
      const storedPassword = await SecureStore.getItemAsync('password');
      const storedisAdmin = await SecureStore.getItemAsync('isAdmin');
      if (storedEmail && storedPassword && storedisAdmin) {
        setStoredCredentials({ email: storedEmail, password: storedPassword, isAdmin: storedisAdmin });
        setIsLogin(true);
        if (isAdmin === "true") {
          setIsAdmin(true);
        }
        console.log('Stored Credentials from app.js:', { email: storedEmail, password: storedPassword, isAdmin: storedisAdmin });
      } else {
        console.log('No credentials found.');
      }
    } catch (error) {
      console.error('Error retrieving credentials:', error);
    }
  }

  useEffect(() => {
    console.log("isLogin", isLogin);
    console.log("isAdmin", isAdmin);
    getStoredCredentials()
  }, [isLogin, isAdmin, storedCredentials])



  // useEffect(() => {
  //   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     setNotification(notification);
  //   });

  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //     console.log(response);
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  return (
    <SafeAreaProvider>
      {/*  */}
      <NavigationContainer>
        {!isLogin ? (
          // <Context>

          <MyContext.Provider value={{ isLogin, setIsLogin, isAdmin, setIsAdmin, storedCredentials, setStoredCredentials }}>
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
            {/* </Context> */}
          </MyContext.Provider>

        ) : (
          // <Context>

          <MyContext.Provider value={{ notificationDesc, setNotificationDesc, time, setTime, isNotification, setIsNotification, isAdmin, setIsAdmin, storedCredentials, setStoredCredentials, isLogin, setIsLogin, }}>
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
              {/* <Stack.Screen
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
              /> */}
            </Stack.Navigator>
            {/* </Context> */}
          </MyContext.Provider>

        )
        }
      </NavigationContainer >
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