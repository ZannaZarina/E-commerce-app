import React from 'react';
import { ScrollView, StyleSheet, StatusBar, Text, View, Alert, TouchableOpacity, Image, Vibration } from 'react-native';
import { Button, Input, NavBar } from '../components';
import { StackNavigationProp } from '@react-navigation/stack';

const Header: React.FC = () => {
    return (
        <View>
            {/* <NavBar goBack onPress={() => Alert.alert('back')} /> */}
            <Text style={headerStyle.text}>Forgot password</Text>
        </View>
    );
};

export const ForgotPassword: React.FC<{ navigation: StackNavigationProp<any> }> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <View>
                <Header />
            </View>
            <View>
                <Text style={style.info}>
                    Please, enter your email address. You will receive a link to create a new password via email.
                </Text>
                <Input label="Email" focused={false} isError />
                <Text style={style.text}>Not a valid email address. Should be your@email.com</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Image source={require('../../assets/Vector.png')} />
                    <Text style={style.text}> Already have an account?</Text>
                </TouchableOpacity>
                <Button title="Send" onPress={() => Alert.alert('Send')} />
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
        paddingHorizontal: 15,
    },
    input: {},
    info: {
        color: '#F7F7F7',
        fontSize: 14,
        lineHeight: 20,
        paddingTop: 87,
        paddingBottom: 16,
    },
    text: {
        color: '#FF2424',
        fontSize: 11,
        lineHeight: 11,
        paddingTop: 4,
        paddingBottom: 55,
        paddingLeft: 15,
    },
});
