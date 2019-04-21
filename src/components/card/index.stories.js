import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import Card from './index';

storiesOf('Card', module)
  .addDecorator(centered)
  .add('default style', () => (
    <Card title="A Default Card">A default card</Card>
  ))
  .add('primary style', () => (
    <Card title="A Primary Card" style="primary">
      A primary card
    </Card>
  ))
  .add('secondary style', () => (
    <Card title="A Secondary Card" style="secondary">
      A secondary card
    </Card>
  ));
