import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SvgTest from './svg/'

export const SimilarResults: React.FC = () => {
    return (
        <View style={style.container}>
            <Image style={style.image} source={require('../../assets/search.png')}/>
            <Text style={style.text}>Finding similar results...</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#1E1F28',  
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginVertical:22
    },
    text: {
        color: '#F5F5F5',
        fontSize: 34,
        lineHeight: 34,
        marginHorizontal: 57,
        textAlign: 'center'
    }
});

