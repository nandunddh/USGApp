import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const About = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="About" component={About} options={{
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
    </NavigationContainer>
    // <View>
    //   <Text>Settings</Text>
    // </View>
  )
}

export default About