import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useContext } from 'react';
import MyContext from '../MyContext';
import * as SecureStore from 'expo-secure-store';
import Login from './Login';
import { Message_data } from '../context';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
  const navigation = useNavigation();
  const { isLogin, setIsLogin, isAdmin, setIsAdmin, setStoredCredentials, storedCredentials } = useContext(MyContext)

  useEffect(() => {
    console.log("login", isLogin)
  }, [isLogin, storedCredentials])

  const clearCredentials = async () => {
    try {
      await SecureStore.deleteItemAsync('email');
      await SecureStore.deleteItemAsync('password');
      navigation.navigate("HomeScreen");
      setStoredCredentials(null)// Clear stored credentials in state
      // setIsLogin(false)

      // navigation.navigate('Login', {
      //   screen: "Sign in"
      // }
      // );
      // navigation.navigate('UserTab', {
      //   screen: 'HomeScreen',
      // });
      console.log('Credentials cleared (logged out) successfully.');
    } catch (error) {
      console.error('Error clearing credentials:', error);
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", backgroundColor: "#fff" }}>
      <View style={{ marginHorizontal: 30, backgroundColor: "red", paddingHorizontal: 30, paddingVertical: 13 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }} onPress={clearCredentials}>Logout</Text>
      </View>
    </View>
  )
}

export default Logout