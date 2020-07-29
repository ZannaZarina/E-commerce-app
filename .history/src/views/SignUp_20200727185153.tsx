import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { Button, Input, NavBar } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <NavBar goBack onPress={() => Alert.alert('back')} />
            <Text style={headerStyle.text}>Sign up</Text>
        </View>
    );
};

const Footer: React.FC = () => {
    return (
        <View>
            <Text style={footerStyle.text}>Or sign up with social account</Text>
            <View style={footerStyle.social}>
                <TouchableOpacity onPress={() => Alert.alert('Google')}>
                    <View style={footerStyle.button}>
                        <Image source={require('../../assets/google.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Facebook')}>
                    <View style={footerStyle.button}>
                        <Image source={require('../../assets/facebook.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const SignUp: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={{ flex: 2 }}>
                <Header />
            </View>
            <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
                <Input label="Name" />
                <Input label="Email" />
                <Input label="Password" />
                <TouchableOpacity onPress={() => Alert.alert('Help')}>
                    <Text style={style.text}>
                        Already have an account?
                        <Image source={require('../../assets/Vector.png')} />
                    </Text>
                </TouchableOpacity>
                <Button title="Sign Up" onPress={() => Alert.alert('Sign up')} />
            </View>
            <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                <Footer />
            </View>
        </ScrollView>
    );
};

const headerStyle = StyleSheet.create({
    button: {
        paddingTop: 56,
        paddingBottom: 34,
    },
    text: {
        fontSize: 34,
        color: '#F7F7F7',
        lineHeight: 34,
    },
});

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
    text: {
        color: '#F7F7F7',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'right',
        paddingBottom: 28,
    },
});

const footerStyle = StyleSheet.create({
    text: {
        color: '#F7F7F7',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
    },
    social: {
        paddingHorizontal: 88,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 12,
    },
    button: {
        backgroundColor: '#FFFFFF',
        paddingLeft: 34,
        paddingRight: 34,
        paddingVertical: 20,
        borderRadius: 24,
        marginHorizontal: 5,
    },
});
