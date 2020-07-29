import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

const HeaderMenu: React.FC = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={headerStyle.a}>
                <Text style={[headerStyle.header, headerStyle.active]}>Women</Text>
            </View>
            <View style={headerStyle.a}>
                <Text style={headerStyle.header}>Men</Text>
            </View>
            <View style={headerStyle.a}>
                <Text style={headerStyle.header}>Kids</Text>
            </View>
        </View>
    );
};

export const Categories: React.FC = () => {
    return (
        <View style={style.container}>
            <NavBar goBack title="Categories" search onPress={() => Alert.alert('search')} />
            <HeaderMenu />
        </View>
    );
};

const headerStyle = StyleSheet.create({
    a: {
        flex: 1
    },
    header: {
        fontSize: 16,
        lineHeight: 16,
        color: '#ABB4BD',
        //   paddingHorizontal: 32,
        paddingVertical: 14,
        textAlign
    },
    active: {
        color: '#F5F5F5',
        borderBottomColor: '#EF3651',
        borderBottomWidth: 3,
    },
});

const style = StyleSheet.create({
    container: {
        backgroundColor: '#1E1F28',
    },
});
