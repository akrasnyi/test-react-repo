import React from 'react';
import Nav from '../Nav';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Nav', module)
    .add('/', () => {
        const loc = {pathname: '/'}
        return <Nav location={loc} />
    })
    .add('mine', () => {
        const loc = {pathname: 'mine'}
        return <Nav location={loc} />
    })
    .add('settings', () => {
        const loc = {pathname: 'settings'}
        return <Nav location={loc} />
    }
)