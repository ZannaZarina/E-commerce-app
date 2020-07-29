import React, { useState} from 'react';
import { TextInput, View, Text, StyleSheet, Image } from 'react-native';

interface Props {
    label: string;
    focused? : boolean;
    isError? : boolean;
}

export const Input: React.FC<Props> = ({ label, focused = false, isError = false }) => {
    const [isFocused, setFocused] = useState<boolean>(false)
    const [value, setValue] = useState<string>('');
    return (
        <View>
           {isFocused && <Text style={style.label}>{label}</Text>}
            <TextInput 
                style={isError ? [style.text, style.container, style.label, style.error] : [style.text, style.container, style.label]}
                placeholderTextColor='#ABB4BD'
                value={value}
                placeholder={label}
                onChange={it=> setValue(it.nativeEvent.text)}
                onFocus={()=>setFocused(true)}
                onBlur={()=> setFocused(false)}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        borderRadius: 4, 
        backgroundColor: '#2A2C36',
        // paddingVertical: 22,
        // paddingLeft: 20,
        marginBottom: 8
    },
    error:{
        borderWidth: 1,
        borderColor: '#FF2424',
    },
    label: {
        color: '#ABB4BD',
        display: 'flex',
        alignItems: 'center',
        textAlignVertical: 'center',
        paddingVertical:14,
        paddingLeft:20,
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 20,
    }
});