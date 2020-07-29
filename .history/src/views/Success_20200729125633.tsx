import React from 'react';
import { StyleSheet, Text, View, Alert, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from '../components';

export const Success: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={{ flex:1 }}>
            <ImageBackground style={{ flex:}} source={require('../../assets/success.png')}>
                <Text style={style.header}>Success!</Text>
                <Text style={style.text}>Your order will be delivered soon. Thank you for choosing our app!</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{flex:2}}></View>
                    <View style={{flex:3}}>
                        <Button title="Continue shopping" onPress={() => Alert.alert('Continue shopping')} size='sm'/>
                    </View>
                    <View style={{flex:2}}></View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    header: {
        color: '#000000',
        fontSize: 34,
        lineHeight: 34,
        paddingTop: 120,
        textAlign: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 16,
        lineHeight: 24,
        marginHorizontal: 57,
        marginVertical: 13,
        textAlign: 'center',
    },
});

