import { configure } from '@storybook/react';

const stories = require.context('../src/components', true, /\.stories\.js$/);

const loadStories = () => {
  stories.keys().forEach(filename => stories(filename));
};

configure(loadStories, module);
