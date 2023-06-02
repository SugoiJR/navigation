// import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { Tabs } from './src/navigations/Tabs';
import { CustomizeMenuLateral } from './src/navigations/CustomizeMenuLateral';
// import { StackNavigator } from './src/navigations/StackNavigator';
// import { MenuLateral } from './src/navigations/MenuLateral';

const App = () => {
  return (
    <NavigationContainer >
      {/* <StackNavigator/> */}
      {/* <MenuLateral /> */}
      <CustomizeMenuLateral />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
