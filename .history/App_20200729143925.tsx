import React, { useState } from 'react';
import storybook from './storybook';
//import { Button } from './src/components/Button';

import 'react-native-gesture-handler';
import { NavigationContainer, StackNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View, TouchableOpacity, Button, StyleSheet, ScrollView, FlatList, StatusBar } from 'react-native';
import { SignUp, ForgotPassword, Login, MyProfile, Categories, Main, Success, SuccessDark } from './src/views/';

import { Home, HomeActive from './svg/Home';
import HomeActive from './svg/HomeActive';
import Shop from './svg/Shop';
import ShopActive from './svg/ShopActive';
import Bag from './svg/Bag';
import BagActive from './svg/BagActive';
import Favourites from './svg/Favourites';
import FavouritesActive from './svg/FavouritesActive';
import Profile from './svg/Profile';
import ProfileActive from './svg/ProfileActive';

const IS_STORYBOOK = false;

const Stack = createStackNavigator();

// const loggedIn = false;

const StackScreen: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerTintColor: '#F7F7F7',
                    headerStyle: {
                        backgroundColor: '#1E1F28',
                    },
                    headerTitleStyle: {
                        fontSize: 18,
                        lineHeight: 22,
                    },
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen name="Login" component={Login} options={{ title: '' }} />
                <Stack.Screen name="Forgot" component={ForgotPassword} options={{ title: '' }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ title: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Tab = createBottomTabNavigator();

const TabScreen: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    inactiveTintColor: '#ABB4BD',
                    activeTintColor: '#EF3651',
                    tabStyle: {
                        backgroundColor: '#1E1F28',
                        paddingTop: 11
                    },
                    style: {
                        borderTopWidth: 0,
                        height: 60
                    },
                    labelStyle: {
                        marginBottom: 10,
                    }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Main}
                    options={{ tabBarIcon: ({ focused }) => (focused ? <HomeActive /> : <Home />) }}
                />
                <Tab.Screen
                    name="Shop"
                    component={Categories}
                    options={{ tabBarIcon: ({ focused }) => (focused ? <ShopActive /> : <Shop />) }}
                />
                <Tab.Screen
                    name="Bag"
                    component={Success}
                    options={{ tabBarIcon: ({ focused }) => (focused ? <BagActive /> : <Bag />) }}
                />
                <Tab.Screen
                    name="Favourites"
                    component={SuccessDark}
                    options={{ tabBarIcon: ({ focused }) => (focused ? <FavouritesActive /> : <Favourites />) }}
                />
                <Tab.Screen
                    name="Profile"
                    component={MyProfile}
                    options={{ tabBarIcon: ({ focused }) => (focused ? <ProfileActive /> : <Profile />) }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const App: React.FC<{ navigation: StackNavigationProp<any> }> = ({ navigation }) => {
    return <TabScreen />;
  //  loggedIn ? <TabScreen /> : <StackScreen />;
};


export default IS_STORYBOOK ? storybook : App;