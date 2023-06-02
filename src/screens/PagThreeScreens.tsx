import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

const PagThreeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  return (
    <View style={ styles.globalSt }>
        <Text style={ styles.title } >Pagina 3 Screen</Text>
        <Button
            title="Regresar"
            onPress={() => navigation.pop() }
        />
        <Button
            title="Volver al Home"
            onPress={() => navigation.popToTop() }
        />
    </View>
  );
};

export default PagThreeScreen;
