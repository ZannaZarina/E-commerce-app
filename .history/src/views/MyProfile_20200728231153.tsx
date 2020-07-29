import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigationBar, NavBar } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <NavBar search onPress={() => Alert.alert('back')} />
            <Text style={headerStyle.text}>My profile</Text>
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
                {/* <Image source={require('../../assets/      .png')} style={style.photo}/> */}
                <View style={style.profile}>
                    <Text style={style.name}>Matilda Brown</Text>
                    <Text style={style.email}>matildabrown@mail.com</Text>
                </View>

                <List />
            </View>

            <BottomNavigationBar />
        </ScrollView>
    );
};

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 34,
        color: '#F7F7F7',
        lineHeight: 34,
        marginTop: 34,
    },
});

const listStyle = StyleSheet.create({
    text: {
        fontSize: 16,
        color: '#F7F7F7',
        
        marginTop: 34,
    },
    comment: {

    }
});

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
    photo: {},
    profile: {},
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
    text: {},
});
