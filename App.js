import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen';
import SettingsScreen from './Components/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import Program from './Components/Program';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './Components/About';
import About from './Components/About';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} options={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTitleStyle:{
          color: "#fff",
        }
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      {/* <Tab.Screen name="Program" component={Program}/> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false, title: null }}
        />
        <Stack.Screen
        name='Program'
        component={Program}/>
        <Stack.Screen
        name='About'
        component={About}/>
      {/* <MyTabs /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
