import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    title: string;
    onPress: () => void;
    outlined?: boolean;
    size?: 'sm' | 'md';
    socialMedia?: boolean;
    isActive?: boolean;
    icon?: boolean;
}

default export const Button(<Props> = ({
    title,
    onPress,
    outlined = false,
    size = 'md',
    isActive = true,
    socialMedia = false,
    icon = false
}) => {
    return (
        <TouchableOpacity
            style={[
                style.container,
                outlined ? style.outlined : style.filled,
                //  isActive ? style.filled : style.inactive
            ]}
            onPress={onPress}
        >
            <Text style={[style.text, size === 'sm' ? style.textSmall : style.textMedium]}>{title}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        borderRadius: 25,
        marginBottom: 16
    },
    filled: {
        backgroundColor: '#EF3651',
    },
    inactive: {
        backgroundColor: '#2A2C36',
    },
    outlined: {
        borderColor: '#F7F7F7',
        borderWidth: 1.5,
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 20,
        alignItems: 'center',
        textAlign: 'center',
    },
    textSmall: {
        paddingVertical: 8,
    },
    textMedium: {
        paddingVertical: 14,
        textTransform: 'uppercase',
    },
});
