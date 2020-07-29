import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

const HeaderMenu: React.FC = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={headerStyle.name}>Women</Text>
            <Text style={headerStyle.name}>matildabrown@mail.com</Text>
            <Text style={headerStyle.name}>matildabrown@mail.com</Text>

        </View>
    );
};

export const Categories: React.FC = () => {
    return (

    <NavBar goBack title="Categories" search onPress={() => Alert.alert('search')} />
    <HeaderMenu/>


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
});