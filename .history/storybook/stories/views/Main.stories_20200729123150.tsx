import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Main } from '../../../src/views';

storiesOf('Login', module)
    .add('default', () => 
        <Main /> );