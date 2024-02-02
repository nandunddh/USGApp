import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen'; // Import your screen components
import ProfileSideBar from './ProfileSideBar';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={ProfileSideBar} />
        {/* Add more screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
