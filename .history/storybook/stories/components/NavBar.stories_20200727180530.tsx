import React from 'react';
import { Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { NavBar } from '../../../src/components';

storiesOf('NavBar', module)
.add('back', () => 
    <NavBar 
    onPress={() => Alert.alert('Pressed')} 
    goBack
    />)
.add('back + title', () => 
    <NavBar 
    onPress={() => Alert.alert('Pressed')} 
    goBack
    title={'Nav Bar'}
    />)
.add('back + title + search', () => 
    <NavBar 
    goBack
    onPress={() => Alert.alert('Pressed')} 
    title={'Nav Bar'}
    search
    />) 
.add('back + search', () => 
    <NavBar 
    onPress={() => Alert.alert('Pressed')} 
    goBc
    title={'Nav Bar'}
    search
    />) 
.add('title + search', () => 
    <NavBar 
    onPress={() => Alert.alert('Pressed')} 
    title={'Nav Bar'}
   
    />) 