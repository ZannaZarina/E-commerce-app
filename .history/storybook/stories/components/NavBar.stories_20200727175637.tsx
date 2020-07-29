import React from 'react';
import { Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { NavBar } from '../../../src/components';

storiesOf('NavBar', module)
.add('navbar back', () => 
    <NavBar 
    onPress={() => Alert.alert('Pressed')} 
    />)
.add('navbar back + title', () => 
    <NavBar 
    title={'Nav Bar'}
    onPress={() => Alert.alert('Pressed')} 
    />) 
add('navbar back + title', () => 
    <NavBar 
    title={'Nav Bar'}
    onPress={() => Alert.alert('Pressed')} 
    />) 
    .add('navbar back + title', () => 
    <NavBar 
    title={'Nav Bar'}
    onPress={() => Alert.alert('Pressed')} 
    />) 