import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

const TabThreeScreen = () => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.globalSt,
      marginTop: top,
    }}>
        <Text style={styles.title}>TabThreeScreen</Text>
    </View>
  );
};

export default TabThreeScreen;
