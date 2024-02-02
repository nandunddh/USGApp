import { View, Text, TextInput } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { Message_data } from './context';


const SettingsScreen = () => {
    const {isAdmin, setIsAdmin, storedCredentials, setStoredCredentials, isLogin, setIsLogin} = useContext(Message_data)
  // const { message } = useContext(Message_data);
  const [email, setEmail] = useState("")
  const email1 = useRef()
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}

export default SettingsScreen