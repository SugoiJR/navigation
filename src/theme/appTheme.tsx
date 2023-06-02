import { StyleSheet } from 'react-native';

export const color = {
    primary: '#5856D6',
    white: 'white',
};

export const styles = StyleSheet.create({
    globalSt: {
        marginHorizontal: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    btnPer: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
    },
    txt: {
        fontSize: 18,
        marginVertical: 4,
        color: 'white',
        fontWeight: 'normal',
    },
    cntAvatar: {
        alignItems: 'center',
        marginVertical: 10,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    cntMenu: {
        marginVertical: 20,
        marginHorizontal: 50,
    },
    btnMenu: {
        marginVertical: 7,
    },
    txtMenu: {
        fontWeight: 'bold',
        fontSize: 15,
    },
});
