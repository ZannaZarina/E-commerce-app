import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Input } from '../../../src/components';

storiesOf('Input', module)
.add('empty input', () => 
    <Input 
        label = 'Sample - empty input' 
    />)
.add('focused input', () =>
    <Input 
        label = 'Sample - focused input' 
        focused = {true}
    />)
.add('input error', () => 
    <Input 
        label = 'Sample - empty input' 
        isError = {true}
    />);