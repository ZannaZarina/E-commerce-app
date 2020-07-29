import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Main } from '../../../src/views';

storiesOf('Main', module)
    .add('default', () => 
        <Main /> );