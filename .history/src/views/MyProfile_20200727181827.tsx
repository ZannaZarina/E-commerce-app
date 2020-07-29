import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

export const MyProfile: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <BottomNavigationBar>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Shop')}>
                    <NavigationTab
                        title="Shop"
                        iconActive={require('../../assets/shop-active.png')}
                        iconInactive={require('../../assets/shop.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Bag')}>
                    <NavigationTab
                        title="Bag"
                        iconActive={require('../../assets/bag-active.png')}
                        iconInactive={require('../../assets/bag.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Favourites')}>
                    <NavigationTab
                        title="Favourites"
                        iconActive={require('../../assets/heart-active.png')}
                        iconInactive={require('../../assets/heart.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Profile')}>
                    <NavigationTab
                        title="Profile"
                        iconActive={require('../../assets/profile-active.png')}
                        iconInactive={require('../../assets/profile.png')}
                    />
                </TouchableOpacity>
            </View>
                
            </BottomNavigationBar>
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
