import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Shadow } from '../components';

export const Main: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ImageBackground style={style.collection} source={require('../../assets/main1.png')}>
                    <Shadow />
                    <Text style={[style.text, style.textCollection]}>New Collection</Text>
                </ImageBackground>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <View style={style.greyBox}>
                        <Text style={[style.text, {color: '#EF3651',}]}>Summer sale</Text>
                    </View>
                    <ImageBackground
                        style={{ flex: 1, justifyContent: 'flex-end' }}
                        source={require('../../assets/images/main2.png')}
                    >
                        <Shadow />
                        <Text style={[style.text, {marginBottom: 30}]}>Black</Text>
                    </ImageBackground>
                </View>
                <View style={{ flex: 1 }}>
                    <ImageBackground 
                        style={{ flex: 1 }} 
                        source={require('../../assets/images/main3.png')}
                    >
                        <Shadow />
                        <Text style={[style.text, style.textHats]}>Men's hats</Text>
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    collection: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
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
    textCollection: {
        marginRight: 18,
        marginBottom: 27,
    },
    textHats: {
        width: 90,
        marginTop: 50,
    },
});
