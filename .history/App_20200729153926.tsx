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

import Home from './svg/Home';
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

// const StackScreen: React.FC = () => {
//     return (
        
//     );
// };

const Tab = createBottomTabNavigator();

const App: React.FC<{ navigation: StackNavigationProp<any> }> = ({ navigation }) => {
    return (
    // <StackScreen />
  //  loggedIn ? <TabScreen /> : <StackScreen />;


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
                <Stack.Screen name="Main" component={TabScreen} options={{ title: '' }} />

            </Stack.Navigator>
        </NavigationContainer>
)

};



export default IS_STORYBOOK ? storybook : App;