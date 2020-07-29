import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Home }  from '../../svg/Home';
import HomeActive from '../../svg/HomeActive';
import Shop from '../../svg/Shop';
import ShopActive from '../../svg/ShopActive';
import Bag from '../../svg/Bag';
import BagActive from '../../svg/BagActive';
import Favourites from '../../svg/Favourites';
import FavouritesActive from '../../svg/FavouritesActive';
import Profile from '../../svg/Profile';
import ProfileActive from '../../svg/ProfileActive';


interface NavigationTabProps {
    title?: string;
    active?: boolean;
    iconActive: ReactNode;
    iconInactive: ReactNode;
}

const NavigationTab: React.FC<NavigationTabProps> = ({
    title = '',
    active = false,
    iconActive,
    iconInactive
}) => {
    return (
        <View style={tabStyle.container}>
            {active ? [iconActive, <Text style={[tabStyle.text, tabStyle.textActive]}>{title}</Text>]: 
            [iconInactive, <Text style={[tabStyle.text, tabStyle.textInactive]}>{title}</Text>]}
        </View>
    );
};

export const BottomNavigationBar: React.FC = () => {
    return (
        <View style={style.bar}>
            <View style={tabStyle.container} >
                <TouchableOpacity onPress={() => Alert.alert('Home')}>
                    <NavigationTab
                    title="Home"
                    iconActive={<HomeActive />}
                    iconInactive={<Home />}
                    />
                </TouchableOpacity>
            </View>
           
            <View style={tabStyle.container} >
                <TouchableOpacity onPress={() => Alert.alert('Shop')}>
                    <NavigationTab
                    title="Shop"
                    iconActive={<ShopActive />}
                    iconInactive={<Shop />}
                    />
                </TouchableOpacity>
            </View>

            <View style={tabStyle.container} >
                <TouchableOpacity onPress={() => Alert.alert('Bag')}>
                    <NavigationTab
                    title="Bag"
                    iconActive={<BagActive />}
                    iconInactive={<Bag />}
                    />
                </TouchableOpacity>
            </View>

            <View style={tabStyle.container} >
                <TouchableOpacity onPress={() => Alert.alert('Favourites')}>
                    <NavigationTab
                    title="Favourites"
                    iconActive={<FavouritesActive />}
                    iconInactive={<Favourites />}
                    />
                </TouchableOpacity>
            </View>

            <View style={tabStyle.container} >
                <TouchableOpacity onPress={() => Alert.alert('Profile')}>
                    <NavigationTab
                    title="Profile"
                    iconActive={<ProfileActive />}
                    iconInactive={<Profile />}
                    />
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
        alignItems: 'center',
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
