import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ShopSvg } from '../../svg/svg';

interface NavigationTabProps {
    imag:
    title?: string;
    active?: boolean;
}

//  source={require('../../assets/bag-active.png')}

const NavigationTab: React.FC<NavigationTabProps> = ({ title = '', active }) => {
    return (
        <View style={tabStyle.container}>
            <Text style={[tabStyle.text, active ? tabStyle.textActive : tabStyle.textInactive]}>{title}</Text>
        </View>
    );
};

export const BottomNavigationBar: React.FC = () => {
    return (
        <View style={style.bar}>
            <View style={tabStyle.container}>
                <Image source={require('../../assets/home.png')} />
                <NavigationTab title="Home" active={true} />
            </View>
            <View style={tabStyle.container}>
                <Image source={require('../../assets/shop-active.png')} />
                <NavigationTab title="Shop"  />
            </View>
            <View style={tabStyle.container}>
                <Image source={require('../../assets/bag.png')} />
                <NavigationTab title="Bag"  />
            </View>
            <View style={tabStyle.container}>
                <Image source={require('../../assets/heart.png')} />
                <NavigationTab title="Favourites" />
            </View>
            <View style={tabStyle.container}>
                <Image source={require('../../assets/profile.png')} />
                <NavigationTab title="Profile"  />
            </View>
        </View>
    );
};

const tabStyle = StyleSheet.create({
    container: {
        flex: 1,
        height: 48,
        alignItems: 'center'
    },
    text: {
        alignSelf: 'center',
        fontSize: 10,
        lineHeight: 10,
        marginTop: 5
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
        paddingTop: 11
    },
});
