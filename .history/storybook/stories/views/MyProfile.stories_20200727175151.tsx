import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { MyProfile } from '../../../src/views';

storiesOf('SignUp', module)
    .add('default', () => 
        <SignUp /> );