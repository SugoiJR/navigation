import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

const TabOneScreen = () => {

  const { top } = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.globalSt,
      marginTop: top,
    }}>
        <Text style={styles.title}>TabOneScreen</Text>
    </View>
  );
};

export default TabOneScreen;
