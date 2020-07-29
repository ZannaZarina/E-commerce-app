import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

const HeaderMenu: React.FC = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={headerStyle.headerActive}>Women</Text>
            <Text style={headerStyle.header}>matildabrown@mail.com</Text>
            <Text style={headerStyle.header}>matildabrown@mail.com</Text>
        </View>
    );
};

export const Categories: React.FC = () => {
    return (
        <View>
            <NavBar goBack title="Categories" search onPress={() => Alert.alert('search')} />
            <HeaderMenu />
        </View>
    );
};

const headerStyle = StyleSheet.create({
    header: {
        fontSize: 16,
        lineHeight: 16,
        color: '#F5F5F5',
        mar: 34,
        paddingLeft: 14,
    },
    headerActive: {
      fontSize: 16,
      lineHeight: 16,
      color: '#ABB4BD',
    },
});
