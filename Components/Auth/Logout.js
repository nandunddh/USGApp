import { View, Text } from 'react-native'
import React from 'react'
import { useContext } from 'react';
import MyContext from '../MyContext';
import * as SecureStore from 'expo-secure-store';
import { ScrollView } from 'react-native';

const Logout = () => {
  const { isLogin, setIsLogin, isAdmin, setIsAdmin, setStoredCredentials, storedCredentials } = useContext(MyContext)

  async function clearCredentials() {
    try {
      await SecureStore.deleteItemAsync('email');
      await SecureStore.deleteItemAsync('password');
      setStoredCredentials(null); // Clear stored credentials in state
      setIsLogin(false);
      console.log('Credentials cleared (logged out) successfully.');
    } catch (error) {
      console.error('Error clearing credentials:', error);
    }
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", backgroundColor: "#fff" }}>
        <View style={{ marginHorizontal: 30, backgroundColor: "red", paddingHorizontal: 30, paddingVertical: 13 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }} onPress={clearCredentials}>Logout</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Logout