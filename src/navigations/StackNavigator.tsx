import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import PagOneScreens from '../screens/PagOneScreens';
import PagTwoScreens from '../screens/PagTwoScreens';
import PagThreeScreen from '../screens/PagThreeScreens';
import PersonaSreen from '../screens/PersonaSreen';

export type RootStackParams = {
    PagOne: undefined,
    PagTwo: undefined,
    PagThree: undefined,
    Persona: { id: number, name: string },
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            cardStyle: {
                backgroundColor: 'white',
            },
        }}
    >
      <Stack.Screen name="PagOne" options={{ title:'Página 1' }} component={PagOneScreens} />
      <Stack.Screen name="PagTwo" options={{ title:'Página 2' }} component={PagTwoScreens} />
      <Stack.Screen name="PagThree" options={{ title:'Página 3' }} component={PagThreeScreen} />
      <Stack.Screen name="Persona" options={{ title:'Persona' }} component={PersonaSreen} />
    </Stack.Navigator>
  );
};
