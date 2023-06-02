import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import SettingScreen from '../screens/SettingScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" options={{ title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="Settings" options={{ title:'Ajustes'}} component={SettingScreen} />
    </Drawer.Navigator>
  );
};
