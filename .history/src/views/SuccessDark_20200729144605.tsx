import React from 'react';
import { StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { Button } from '../components';

export const SuccessDark: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={{ flex:1 }}>
                <View style={style.content}>
                    <Image source={require('../../assets/bags.png')} />
                    <Text style={style.header}>Success!</Text>
                    <Text style={style.text}>Your order will be delivered soon. Thank you for choosing our app!</Text>
                </View>
                <Button title="Continue shopping" onPress={() => Alert.alert('Continue shopping')} />
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
    content: {
        flex: 1
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        color: '#F7F7F7',
        fontSize: 34,
        lineHeight: 34,
        paddingTop: 40,
        paddingBottom: 12,
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 21,
        paddingHorizontal: 60,
        textAlign: 'center',
    }
});
