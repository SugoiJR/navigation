import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabOneScreen from '../screens/TabOne';
import TabTwoScreen from '../screens/TabTwo';
// import TabThreeScreen from '../screens/TabThree';
import { StackNavigator } from './StackNavigator';
import { color } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {

    const { white, primary } = color;

  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: white,
        }}
        screenOptions={{
            tabBarActiveTintColor: primary,
            headerShown: false,
            tabBarStyle: {
                borderTopColor: primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarLabelStyle: {
                fontSize: 15,
                color: 'black',
                fontWeight: '600',
            },
        }}
    >
      <Tab.Screen name="TabOne" options={{title:'One'}} component={TabOneScreen} />
      <Tab.Screen name="TabTwo" options={{title:'Two'}} component={TabTwoScreen} />
      <Tab.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
};
