import React from 'react';
import TitleChanger from '../TitleChanger';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('TitleChanger', module)
    .add('TitleChanger', () => {
        const title = 'Test title';
        return <TitleChanger title={title} changeTitle={action('changeTitle')} />
    }
    )