import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import Button from './index';

storiesOf('Button', module)
  .addDecorator(centered)
  .add('with text', () => <Button>A cool button</Button>)
  .add('with text; disabled', () => <Button disabled>A cool button</Button>)
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        ⚡ Super cool button
      </span>
    </Button>
  ));
