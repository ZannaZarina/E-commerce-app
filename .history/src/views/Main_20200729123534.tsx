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
        <View style={{ marginTop: 30 }}>
            <View style={listStyle.row}>
                <View>
                    <Text style={listStyle.text}>My orders</Text>
                    <Text style={listStyle.comment}>Already have 12 orders</Text>
                </View>
                <ArrowRight />
            </View>

            <Image source={require('../../assets/divider.png')} />

            <View style={listStyle.row}>
                <View>
                    <Text style={listStyle.text}>Shipping addresses</Text>
                    <Text style={listStyle.comment}>3 addresses</Text>
                </View>
                <ArrowRight />
            </View>

            <Image source={require('../../assets/divider.png')} />

            <View style={listStyle.row}>
                <View>
                    <Text style={listStyle.text}>Payment methods</Text>
                    <Text style={listStyle.comment}>Visa **34</Text>
                </View>
                <ArrowRight />
            </View>

            <Image source={require('../../assets/divider.png')} />

            <View style={listStyle.row}>
                <View>
                    <Text style={listStyle.text}>Promocodes</Text>
                    <Text style={listStyle.comment}>You have special promocodes</Text>
                </View>
                <ArrowRight />
            </View>

            <Image source={require('../../assets/divider.png')} />

            <View style={listStyle.row}>
                <View>
                    <Text style={listStyle.text}>My reviews</Text>
                    <Text style={listStyle.comment}>Reviews for 4 items</Text>
                </View>
                <ArrowRight />
            </View>

            <Image source={require('../../assets/divider.png')} />

            <View style={listStyle.row}>
        
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
