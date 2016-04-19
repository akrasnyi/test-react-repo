import { configure } from '@kadira/storybook';

function loadStories() {
    require('../src/js/components/stories/');
}

configure(loadStories, module);