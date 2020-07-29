import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { M } from '../../../src/views';

storiesOf('Login', module)
    .add('default', () => 
        <Login /> );