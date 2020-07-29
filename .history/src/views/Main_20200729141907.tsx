import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Main: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                <ImageBackground
                    style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}
                    source={require('../../assets/main1.png')}
                >
                    <Shadow/>
                    <Text style={[style.text, style.textCollection]}>New Collection</Text>
                </ImageBackground>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <View style={style.greyBox}>
                        <Text style={[style.text, style.textActive]}>Summer sale</Text>
                    </View>
                    <ImageBackground
                        style={{ flex: 1, justifyContent: 'flex-end' }}
                        source={require('../../assets/main2.png')}
                    >
                        <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,06)']}
                        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height:1200  }}
                    ></LinearGradient>
                        <Text style={[style.text, style.textBlack]}>Black</Text>
                    </ImageBackground>
                </View>
                <View style={{ flex: 1 }}>
                    <ImageBackground style={{ flex: 1 }} source={require('../../assets/main3.png')}>
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.7)']}
                        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 100  }}
                    ></LinearGradient>
                        <Text style={[style.text, style.textHats]}>Men's hats</Text>
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    greyBox: {
        flex: 1,
        backgroundColor: '#1E1F28',
        justifyContent: 'center',
    },
    text: {
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
        fontWeight: 'bold',
        marginLeft: 15,
    },
    textActive: {
        color: '#EF3651',
    },
    textCollection: {
        marginRight: 18,
        marginBottom: 27,
    },
    textBlack: {
        marginBottom: 30,
    },
    textHats: {
        width: 90,
        marginTop: 50,
    },
});
