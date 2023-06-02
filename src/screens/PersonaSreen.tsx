import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigations/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Persona'>{}

// interface Persona {
//     id: number
//     name: string
// }

const PersonaSreen = ({ route, navigation }: Props) => {

    // const params = route.params as Persona;
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.name,
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <View style={ styles.globalSt }>
        <Text style={ styles.title }>
            {
                JSON.stringify(params, null, 3)
            }
        </Text>
    </View>
  );
};

export default PersonaSreen;
