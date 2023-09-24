import { View, Text } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "red" }}>
      </View>
      <View style={{flex: 2}}>
        <Text>SettingsScreen</Text>
      </View>
    </View>
  )
}

export default SettingsScreen