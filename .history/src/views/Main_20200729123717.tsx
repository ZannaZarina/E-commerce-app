import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';


export const MyProfile: React.FC = () => {
    return (
        <View style={style.container}>
               <View>
            <View style={style.photo}>
        
            </View>
        </View>
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
