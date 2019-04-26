import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import Icon from './index';

storiesOf('Icon', module)
  .addDecorator(centered)
  .add('default style', () => <Icon />);
