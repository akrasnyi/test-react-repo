import React from 'react';
import TitleChanger from '../TitleChanger';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('TitleChanger', module)
    .add('No title', () => {
        const title = '';
        return <TitleChanger title={title} changeTitle={action('changeTitle')} />
    })
    .add('With title', () => {
            const title = 'Test title';
            return <TitleChanger title={title} changeTitle={action('changeTitle')} />
        }
    )