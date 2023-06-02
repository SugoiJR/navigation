import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const PagTwoScreens = () => {

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hello World',
      headerBackTitle: 'Atras',
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={ styles.globalSt }>
        <Text style={ styles.title } >Pagina 2 Screen</Text>
        <Button
            title="Ir a Página 3"
            onPress={() => navigation.navigate('PagThree') }
        />
    </View>
  );
};

export default PagTwoScreens;
