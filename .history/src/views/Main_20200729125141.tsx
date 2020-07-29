import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export const Main: React.FC = () => {
    return (
        <View style={style.container}>
            <View style={{ flex: 1 }}>
                <View style={style.photo}>
                    <Image source={require('../../assets/main1.png')} />
                </View>
            </View>

            <View style={style.horizontal2}>
                <View style={{ flex: 1 }}>
                    <View style={style.greyBox}>
                        <Text style={[style.text, style.textActive]}>Summer sale</Text>
                    </View>
                    <View style={style.photo}>
                        <Image source={require('../../assets/main2.png')} />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={style.photo}>
                        <Image source={require('../../assets/main3.png')} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    horizontal2: {
        flexDirection: 'row'
    },
    photo: {
    },
    greyBox: {
        backgroundColor: '#1E1F28',
        flex: 1,
    },
    text: {
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
       
    },
    textActive: {
        color: '#EF3651',
        marginLeft: 15,
        textAlignV: 'center'
    }
});
