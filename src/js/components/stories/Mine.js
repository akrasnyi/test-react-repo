import React from 'react';
import Mine from '../containers/Mine';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Mine', module)
    .add('Mine', () => (
        <Mine/>
    ))
