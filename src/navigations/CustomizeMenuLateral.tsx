import React from 'react';

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import SettingScreen from '../screens/SettingScreen';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const CustomizeMenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front'}}
      initialRouteName="Home"
      drawerContent={MenuContent}
    >
      {/* <Drawer.Screen name="Home" options={{headerShown: false}} component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" options={{headerShown: false}} component={Tabs} />
      <Drawer.Screen name="Settings" options={{headerShown: false}} component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = ({ navigation }: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      <View style={styles.cntAvatar}>
        <Image
          source={{
            uri:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.cntMenu}>
        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Text style={styles.txtMenu}>Navegación con Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.txtMenu}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
