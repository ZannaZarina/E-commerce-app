import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

const HeaderMenu: React.FC = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: }}>
            <Text style={headerMenu.name}>Matilda Brown</Text>
            <Text style={headerMenu.email}>matildabrown@mail.com</Text>
            <Text style={headerMenu.email}>matildabrown@mail.com</Text>

        </View>
    );
};

export const Categories: React.FC = () => {
    return;

    <NavBar goBack title="Categories" search onPress={() => Alert.alert('search')} />;
};
