import { configure, addParameters } from '@storybook/html';
import theme from './theme';

const loadStories = () => {
  require('../src/components');
};

addParameters({
  options: {
    theme
  }
});

configure(loadStories, module);
