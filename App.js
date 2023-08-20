import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Components/HomeScreen'
import SettingsScreen from './Components/SettingsScreen'
import { NavigationContainer } from '@react-navigation/native'
import Program from './Components/Program'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from './Components/About'
import About from './Components/About'
import Login from './Components/Auth/Login'
import { useState } from 'react'
import MyContext from './Components/MyContext'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            // backgroundColor: "#000",
          },
          headerTitleStyle: {
            color: '#000',
          },
          headerTitleAlign: 'center',
          headerTitle: ' ',
          // headerShown: false,
          // title: false
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      {/* <Tab.Screen name="Program" component={Program}/> */}
    </Tab.Navigator>
  )
}

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <NavigationContainer>
      {!isLogin ? (
        <MyContext.Provider value={{ isLogin, setIsLogin }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false, title: null }}
            />
          </Stack.Navigator>
        </MyContext.Provider>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home1"
            component={MyTabs}
            options={{ headerShown: false, title: null }}
          />
          <Stack.Screen name="Program" component={Program} />
          <Stack.Screen name="About" component={About} />
          {/* <MyTabs /> */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
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
