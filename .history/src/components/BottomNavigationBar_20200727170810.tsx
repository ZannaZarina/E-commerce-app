import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { ShopSvg } from '../../svg/svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface NavigationTabProps {
    title?: string;
    active?: boolean;
}

const NavigationTab: React.FC<NavigationTabProps> = ({ title = '', active }) => {
    return (
        <View style={tabStyle.container}>
            <View style={tabStyle.icon}>
                <Image
                    source={active ? require('../../assets/home-active.png') : require('../../assets/'+ this.NavigationTabProps.title +'.png')}
                />
            </View>
            <Text style={[tabStyle.text, active ? tabStyle.textActive : tabStyle.textInactive]}>{title}</Text>
        </View>
    );
};

// source={require('../../assets/Chevron.png')} 

export const BottomNavigationBar: React.FC = () => {
    return (
        <View style={style.bar}>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Home')}>
                    <NavigationTab title="home" />
                </TouchableOpacity>
            </View>
            {/* <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Shop')}>
                  
                    <NavigationTab title="Shop" active />
                </TouchableOpacity>
            </View>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Bag')}>
                   
                    <NavigationTab title="Bag" />
                </TouchableOpacity>
            </View>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Favourites')}>
                   
                    <NavigationTab title="Favourites" />
                </TouchableOpacity>
            </View>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Profile')}>
                  
                    <NavigationTab title="Profile" />
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

const tabStyle = StyleSheet.create({
    container: {
        flex: 1,
        height: 48,
        alignItems: 'center',
    },
    icon: {
        alignItems: 'center',
    },
    text: {
        alignSelf: 'center',
        fontSize: 10,
        lineHeight: 10,
        marginTop: 5,
    },
    textActive: {
        color: '#EF3651',
    },
    textInactive: {
        color: '#ABB4BD',
    },
});

const style = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        backgroundColor: '#1E1F28',
        paddingTop: 11,
    },
});
