import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';
import ArrowRight from '../../svg/ArrowRight';

const List: React.FC = () => {
    return (
        <View>
    

            <View style={style.photo}>
        
            </View>
        </View>
    );
};

export const MyProfile: React.FC = () => {
    return (
        <View contentContainerStyle={style.container}>
             
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#1E1F28',
    },
    photo: {

    }
});
