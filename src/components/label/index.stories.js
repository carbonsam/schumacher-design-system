import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import Label from './index';

storiesOf('Label', module)
  .addDecorator(centered)
  .add('default style', () => <Label>A default label</Label>)
  .add('success style', () => <Label style="success">A success label</Label>)
  .add('warning style', () => <Label style="warning">A warning label</Label>)
  .add('danger style', () => <Label style="danger">A danger label</Label>);
