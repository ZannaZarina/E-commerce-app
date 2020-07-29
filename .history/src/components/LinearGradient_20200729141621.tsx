import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Shadow extends React.Component {
    render() {
        return (
            <View>
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.7)']}
                    style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 100 }}
                ></LinearGradient>
            </View>
        );
    }
}
