import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ShopSvg } from '../../svg/svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface NavigationTabProps {
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
            <TouchableOpacity style={tabStyle.container} o >
                <Image source={require('../../assets/home-active.png')} />)
                <NavigationTab title="Home" active={false} />
            </TouchableOpacity>
            <TouchableOpacity style={tabStyle.container}>
                <Image source={require('../../assets/shop-active.png')} />
                <NavigationTab title="Shop" active={true}  />
            </TouchableOpacity>
            <TouchableOpacity style={tabStyle.container}>
                <Image source={require('../../assets/bag.png')} />
                <NavigationTab title="Bag" active={false}  />
            </TouchableOpacity>
            <TouchableOpacity style={tabStyle.container}>
                <Image source={require('../../assets/heart.png')} />
                <NavigationTab title="Favourites" active={false} />
            </TouchableOpacity>
            <TouchableOpacity style={tabStyle.container}>
                <Image source={require('../../assets/profile.png')} />
                <NavigationTab title="Profile"  active={false} />
            </TouchableOpacity>
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
