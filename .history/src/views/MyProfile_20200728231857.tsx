import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <NavBar search onPress={() => Alert.alert('back')} />
            <Text style={headerStyle.header}>My profile</Text>
        </View>
    );
};

const Profile: React.FC = () => {
    return (
        <View style={profileStyle.profile}>
            <Image source={require('../../assets/girlPhoto.png')} style={profileStyle.photo}/>
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
            <View>
                <Text style={listStyle.text}>My orders</Text>
                <Text style={listStyle.comment}>Already have 12 orders</Text>
            </View>
            {/* ikonka */}
        </View>
    );
};

export const MyProfile: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <View>
                <Header />
            </View>

            <View>
                <Profile />
            </View>

            <View>
                <List />
            </View>

            <BottomNavigationBar />
        </ScrollView>
    );
};

const headerStyle = StyleSheet.create({
    header: {
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
        marginTop: 34,
    },
});

const profileStyle = StyleSheet.create({
    profile: {

    },
    photo: {

    },
    name: {
        fontSize: 18,
        lineHeight: 22,
        color: '#F7F7F',
    },
    email: {
        fontSize: 14,
        lineHeight: 20,
        color: '#ABB4BD',
    },
});

const listStyle = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 16,
        color: '#F7F7F7',
    },
    comment: {
        fontSize: 11,
        lineHeight: 11,
        color: '#ABB4BD',
    },
});

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    }
});
