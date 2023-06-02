/* eslint-disable react/no-unstable-nested-components */
// import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any>{}
interface Props extends DrawerScreenProps<any, any>{}


const PagOneScreens = ( { navigation }: Props ) => {

    useEffect(() =>{
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Menú"
                    onPress={() => navigation.toggleDrawer() }
                />
            ),
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <ScrollView style={ styles.globalSt }>
        <Text style={ styles.title } >Pagina 1 Screen</Text>
        <Button
            title="Ir a Página 2"
            onPress={() => navigation.navigate('PagTwo') }
        />

        <Text style={ styles.title } >Navegar con argumentos</Text>

        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    ...styles.btnPer,
                    backgroundColor: '#8000ff',
                }}
                onPress={() => navigation.navigate('Persona', {
                    id: 1,
                    name: 'Pedro',
                }) }
            >
                <Text style={ styles.txt }>Pedro</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={ styles.btnPer }
                onPress={() => navigation.navigate('Persona', {
                    id: 2,
                    name: 'Juan',
                }) }
            >
                <Text style={ styles.txt }>Juan</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default PagOneScreens;
