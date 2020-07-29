import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

export const MyProfile: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <NavBar search onPress={() => Alert.alert('Favourites')}

            <BottomNavigationBar />
       
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    header: {
        color: '#F7F7F7',
        fontSize: 34,
        lineHeight: 34,
        paddingTop: 40,
        paddingBottom: 12,
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 21,
        paddingHorizontal: 60,
        textAlign: 'center',
    }
});
