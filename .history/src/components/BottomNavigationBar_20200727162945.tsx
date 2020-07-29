import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { ShopSvg } from '../../svg/svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface NavigationTabProps {
    title?: string;
    active?: boolean;
    source?: {require(string)}
}

const NavigationTab: React.FC<NavigationTabProps> = ({ title = '', active, source }) => {
    return (
        <View style={tabStyle.container}>
            <View style={tabStyle.icon}>
                <Image source={source}/>
            </View>
            <Text style={[tabStyle.text, active ? tabStyle.textActive : tabStyle.textInactive]}>{title}</Text>
        </View>
    );
};

export const BottomNavigationBar: React.FC = () => {
    return (
        <View style={style.bar}>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Home')}>
                   
                    <NavigationTab title="Home" source='../../assets/shop-active.png' />
                </TouchableOpacity>
            </View>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Shop')}>
                    <View style={tabStyle.icon}>
                        <Image source={require('../../assets/shop-active.png')} />
                    </View>
                    <NavigationTab title="Shop" />
                </TouchableOpacity>
            </View>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Bag')}>
                    <View style={tabStyle.icon}>
                        <Image source={require('../../assets/bag.png')} />
                    </View>
                    <NavigationTab title="Bag" />
                </TouchableOpacity>
            </View>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Favourites')}>
                    <View style={tabStyle.icon}>
                        <Image source={require('../../assets/heart.png')} />
                    </View>
                    <NavigationTab title="Favourites" />
                </TouchableOpacity>
            </View>
            <View style={tabStyle.container}>
                <TouchableOpacity onPress={() => Alert.alert('Profile')}>
                    <View style={tabStyle.icon}>
                        <Image source={require('../../assets/profile.png')} />
                    </View>
                    <NavigationTab title="Profile" />
                </TouchableOpacity>
            </View>
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
