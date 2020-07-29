import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

const HeaderMenu: React.FC = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ flex: 1 }}>
                <Text style={[headerStyle.header, headerStyle.active]}>Women</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={headerStyle.header}>Men</Text>
            </View>
            <View style={{ flex: 1 }}>
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
            <View style={style.sales}>
               <Text style={style.text}>Summer sales</Text>
               <Text style={style.comment}>Up to 50% off</Text>
            </View>
        </View>
    );
};

const headerStyle = StyleSheet.create({
    header: {
        fontSize: 16,
        lineHeight: 16,
        color: '#ABB4BD',
        paddingVertical: 14,
        textAlign: 'center',
    },
    active: {
        color: '#F5F5F5',
        borderBottomColor: '#EF3651',
        borderBottomWidth: 3,
    },
});

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
    },
    sales: {
      backgroundColor: '#FF3E3E',
      borderRadius: 8, 
      marginTop: 16,
      marginHorizontal: 15
    },
    text: {
      fontSize: 24,
      lineHeight: 29,
      color: '#F7F7F7',
      textTransform: 'uppercase',
      marginTop
    },
    comment: {
      fontSize: 14,
      lineHeight: 20,
      color: '#F7F7F7',
    }
});
