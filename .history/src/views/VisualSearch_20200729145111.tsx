import React from 'react';
import { StyleSheet, Text, View, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, NavBar } from '../components';

export const VisualSearch: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <NavBar title={'Visual search'} onPress={() => Alert.alert('back')} />
            <ImageBackground style={{ flex: 1 }} source={require('../../assets/visualSearch.png')}>
                <View style={style.content}>
                    <Text style={style.text}>Search for an outfit by taking a photo or uploading an image</Text>
                    <Button title="Take a photo" onPress={() => Alert.alert('Take a photo')} />
                    <Button title="Upload an image" onPress={() => Alert.alert('Upload an image')} outlined />
                </View>
            </ImageBackground>
        </View>
    );
};

const style = StyleSheet.create({

    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    text: {
        color: '#F7F7F7',
        fontSize: 24,
        lineHeight: 29,
        paddingBottom: 28,
        paddingRight: 25,
    },
});
