import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { VisualSearch } from '../../../src/views';

storiesOf('VisualSearch', module)
    .add('default', () => 
        <VisualSearch /> );