import React, { Fragment } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import Button from './index';

storiesOf('Button', module)
  .addDecorator(centered)
  .add('default style', () => (
    <Fragment>
      <Button size="large">A large button</Button>{' '}
      <Button>A default button</Button>{' '}
      <Button size="small">A small button</Button> <br />
      <Button fullWidth>A full-width button</Button>
    </Fragment>
  ))
  .add('primary style', () => (
    <Fragment>
      <Button style="primary" size="large">
        A large button
      </Button>{' '}
      <Button style="primary">A default button</Button>{' '}
      <Button style="primary" size="small">
        A small button
      </Button>{' '}
      <br />
      <Button style="primary" fullWidth>
        A full-width button
      </Button>
    </Fragment>
  ))
  .add('secondary style', () => (
    <Fragment>
      <Button style="secondary" size="large">
        A large button
      </Button>{' '}
      <Button style="secondary">A default button</Button>{' '}
      <Button style="secondary" size="small">
        A small button
      </Button>{' '}
      <br />
      <Button style="secondary" fullWidth>
        A full-width button
      </Button>
    </Fragment>
  ))
  .add('danger style', () => (
    <Fragment>
      <Button style="danger" size="large">
        A large button
      </Button>{' '}
      <Button style="danger">A default button</Button>{' '}
      <Button style="danger" size="small">
        A small button
      </Button>{' '}
      <br />
      <Button style="danger" fullWidth>
        A full-width button
      </Button>
    </Fragment>
  ))
  .add('other styles', () => (
    <Fragment>
      <Button style="text">A text button</Button>
      <br />
      <Button style="link">A link button</Button>
    </Fragment>
  ));
