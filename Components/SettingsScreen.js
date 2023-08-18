import { View, Text, Button } from 'react-native'
import React from 'react'

const SettingsScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go To About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  )
}

export default SettingsScreen