import { configure, addParameters } from '@storybook/react';
import theme from './theme';

const stories = require.context('../src/components', true, /\.stories\.js$/);

const loadStories = () => {
  stories.keys().forEach(filename => stories(filename));
};

addParameters({
  options: {
    theme
  }
});

configure(loadStories, module);
