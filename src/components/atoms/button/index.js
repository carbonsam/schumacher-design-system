import { storiesOf } from '@storybook/html';
import feather from 'feather-icons';

import 'shoelace-css/source/css/shoelace.css';
import '../../../theme/variables.css';

storiesOf('Atoms|Button', module)
  .add('with text', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello World';
    return button;
  })
  .add('with icon', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = `${feather.icons['zap'].toSvg({
      width: '1rem',
      height: '1rem'
    })} Hello World`;
    return button;
  });
