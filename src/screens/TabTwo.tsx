import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

const TabTwoScreen = () => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.globalSt,
      marginTop: top,
    }}>
        <Text style={styles.title}>TabTwoScreen</Text>
    </View>
  );
};

export default TabTwoScreen;
