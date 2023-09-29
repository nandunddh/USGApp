import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';


const UpComingConferenceScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [storedCredentials, setStoredCredentials] = useState(null);

  // Function to store credentials
  async function storeCredentials() {
    try {
      await SecureStore.setItemAsync('username', username);
      await SecureStore.setItemAsync('password', password);
      console.log('Credentials stored successfully.');
    } catch (error) {
      console.error('Error storing credentials:', error);
    }
  }

  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={{ width: 200, height: 40, marginBottom: 10, paddingHorizontal: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        style={{ width: 200, height: 40, marginBottom: 10, paddingHorizontal: 10 }}
      />
      <Button title="Store Credentials" onPress={storeCredentials} />
      <Button title="Get Stored Credentials" onPress={getStoredCredentials} />
      {storedCredentials && (
        <View>
          <Text>Stored Credentials:</Text>
          <Text>Username: {storedCredentials.username}</Text>
          <Text>Password: {storedCredentials.password}</Text>
        </View>
      )}
    </View>
  )
}

export default UpComingConferenceScreen