import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LinearGradient } from '../../../src/components';

storiesOf('LinearGradient', module)
.add('empty input', () => 
    <LinearGradient 
        label='Sample' 
    />)