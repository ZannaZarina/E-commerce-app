import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { Button, Input, NavBar } from '../components';
import { StackNavigationProp } from '@react-navigation/stack';

const Header: React.FC = () => {
    return (
        <View>
            <NavBar goBack onPress={() => Alert.alert('back')} /> */}
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

export const SignUp: React.FC<{ navigation: StackNavigationProp<any> }> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <View>
                <Header />
            </View>

            <View style={{ marginTop: 73 }}>
                <Input label="Name" />
                <Input label="Email" />
                <Input label="Password" />
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={style.navigate}>
                    <Image source={require('../../assets/Vector.png')} />
                    <Text style={style.text}> Already have an account?</Text>
                </TouchableOpacity>
                <View style={style.button}>
                    <Button title="Sign Up" onPress={() => Alert.alert('Sign up')} />
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Footer />
            </View>
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

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
    navigate: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    text: {
        color: '#F7F7F7',
        fontSize: 14,
        lineHeight: 20,
        marginRight: 5,
    },
    button: {
        marginTop: 28
    }
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
