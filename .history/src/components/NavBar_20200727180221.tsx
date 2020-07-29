import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';

interface Props {
    onPress: () => void;
    
    title?: string;
    search?: boolean;
}

export const NavBar: React.FC<Props> = ({ onPress, title = '', search=false }) => {
    return (
        <View style={style.container}>
            
            <TouchableOpacity onPress={onPress}>
                <Image style={style.button} source={require('../../assets/Chevron.png')} />
            </TouchableOpacity>
            <Text style={style.text}>{title}</Text>

            {search ? [<TouchableOpacity onPress={onPress}>
                <Image style={style.button} source={require('../../assets/searchSmall.png')} />
            </TouchableOpacity>] : [<View></View>]}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
        paddingTop: 35,
        paddingBottom: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginTop: 5
    },
    text: {
        color: '#F5F5F5',
        fontSize: 18,
        textAlign: 'center',
    },
});
