import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';
import ArrowRight from '../../svg/ArrowRight';

const Header: React.FC = () => {
    return (
        <View>
            <NavBar search onPress={() => Alert.alert('search')} />
            <Text style={headerStyle.header}>My profile</Text>
        </View>
    );
};

const Profile: React.FC = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/girlPhoto.png')} style={profileStyle.photo} />
            <View>
                <Text style={profileStyle.name}>Matilda Brown</Text>
                <Text style={profileStyle.email}>matildabrown@mail.com</Text>
            </View>
        </View>
    );
};

const List: React.FC = () => {
    return (
        <View>
    

            <View style={style.ph}>
        
            </View>
        </View>
    );
};

export const MyProfile: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={style.container}>
                <Header />
                <Profile />
                <List />
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#1E1F28',
    },
});
