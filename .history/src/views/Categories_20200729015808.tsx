import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

interface HeaderProps {
   active: boolean;
}

const HeaderMenu: React.FC<HeaderProps> = () => {
   active = f
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
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
        marginTop: 34,
        paddingLeft: 14,
    },
    headerActive: {},
});
