import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer, StackNavigationState } from '@react-navigation/native';
import { VisualSearch } from './VisualSearch';


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

const Category: React.FC = () => {
    return (
      <View style={{flex: 1, }}>
            <View style={categoryStyle.row}>
                <View style={{ flex: 1 }}>
                    <Text style={categoryStyle.text}>New</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Image source={require('../../assets/Category1.png')} />
                </View>
            </View>

            <View style={categoryStyle.row}>
                <View style={{ flex: 1 }}>
                    <Text style={categoryStyle.text}>Clothes</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Image source={require('../../assets/Category2.png')} />
                </View>
            </View>

            <View style={categoryStyle.row}>
                <View style={{ flex: 1 }}>
                    <Text style={categoryStyle.text}>Shoes</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Image source={require('../../assets/Category3.png')} />
                </View>
            </View>

            <View style={categoryStyle.row}>
                <View style={{ flex: 1 }}>
                    <Text style={categoryStyle.text}>Accesories</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Image source={require('../../assets/Category4.png')} />
                </View>
            </View>
        </View>
    );
};

export const Categories: React.FC <{ navigation: StackNavigationProp<any> }> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <NavBar goBack title="Categories" search onPress={() => Alert.alert('search')} />
            <HeaderMenu />
            <TouchableOpacity onPress={() => navigation.navigate('VisualSearch')}>
                <View style={style.sales} >
                    <Text style={style.text}>Summer sales</Text>
                    <Text style={style.comment}>Up to 50% off</Text>
                </View>
                <Category />
            </TouchableOpacity>
            <BottomNavigationBar />
        </ScrollView>
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
        backgroundColor: '#1E1F28',
    },
    sales: {
        backgroundColor: '#FF3E3E',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        marginHorizontal: 15,
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        lineHeight: 29,
        color: '#F7F7F7',
        textTransform: 'uppercase',
        marginTop: 23,
    },
    comment: {
        fontSize: 14,
        lineHeight: 20,
        color: '#F7F7F7',
        marginBottom: 28,
    },
});

const categoryStyle = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 30,
        backgroundColor: '#2A2C36',
        marginBottom:16,
        borderRadius: 8,
    },
    text: {
       flex: 1,
        fontSize: 18,
        lineHeight: 22,
        color: '#F7F7F7',
        marginLeft: 23,
        textAlignVertical: 'center'
    },
});

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Categories" component={Categories} />
                <Tab.Screen name="VisualSearch" component={VisualSearch} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};


