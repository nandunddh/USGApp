import React from 'react';
import { View, Text } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

const CenteredTabBar = ({ navigationState, position }) => {
  return (
    <TabBar
      navigationState={navigationState}
      position={position}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, fontWeight: focused ? 'bold' : 'normal' }}>{route.title}</Text>
      )}
      style={{
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

export default CenteredTabBar;
