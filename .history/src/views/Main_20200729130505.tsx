import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

export const Main: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ flex: 1 }} source={require('../../assets/main1.png')}>
                    <Text style={style.text}>New Collection</Text>
                </ImageBackground>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <View style={style.greyBox}>
                        <Text style={[style.text, style.textActive]}>Summer sale</Text>
                    </View>
                    <ImageBackground style={{ flex: 1 }} source={require('../../assets/main2.png')}>
                        <Text style={style.text}>Black</Text>
                    </ImageBackground>
                </View>
                <View style={{ flex: 1 }}>
                    <ImageBackground style={{ flex: 1 }} source={require('../../assets/main3.png')}>
                        <Text style={style.textHats}>Men's hats</Text>
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    photo: {},
    greyBox: {
        backgroundColor: '#1E1F28',
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
    },
    textActive: {
        color: '#EF3651',
        marginLeft: 15,
    },
});
