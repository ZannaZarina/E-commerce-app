import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <NavBar search onPress={() => Alert.alert('back')} />
            <Text style={headerStyle.text}>My profile</Text>
        </View>
    );
}; 

export const MyProfile: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={{ flex: 2 }}>
                <Header />
            </View>
            <View>
                <Image source={require('../../assets/.png')} style={style.photo/>

            </View>

            <BottomNavigationBar />
        </ScrollView>
    );
};

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 34,
        color: '#F7F7F7',
        lineHeight: 34,
        marginTop: 34,
    },
});

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
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
    },
});
