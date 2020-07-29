import React from 'react';
n
import { storiesOf } from '@storybook/react-native';
import { Button } from '../../../src/components';

storiesOf('Button', module)
.add('default', () => 
    <Button 
        title={'Press Me'}
        onPress={() => Alert.alert('Pressed')} 
    /> )
.add('outlined', () => 
    <Button 
        title={'Press Me'}
        onPress={() => Alert.alert('Pressed')} 
        outlined
    /> )
.add('small', () => 
    <Button 
        title={'Press Me'}
        onPress={() => Alert.alert('Pressed')} 
        size='sm'
    /> )
.add('small outlined', () => 
    <Button 
        title={'Press Me'}
        onPress={() => Alert.alert('Pressed')} 
        size='sm'
        outlined
    /> )
.add('inactive', () =>
<Button
        title={'Press Me'}
        onPress={() => Alert.alert('Pressed')} 
        isActive = {false}
    />)