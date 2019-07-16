import { storiesOf } from '@storybook/html';

import 'shoelace-css/source/css/shoelace.css';
import '../../../theme/variables.css';

storiesOf('Atoms|Content', module)
  .add('headings', () => require('./headings.html'))
  .add('paragraphs', () => require('./paragraphs.html'))
  .add('horizontal rules', () => require('./horizontal-rules.html'))
  .add('ordered lists', () => require('./ordered-lists.html'))
  .add('unordered lists', () => require('./unordered-lists.html'))
  .add('definition lists', () => require('./definition-lists.html'))
  .add('blockquotes', () => require('./blockquotes.html'))
  .add('preformatted content', () => require('./preformatted-content.html'))
  .add('text styles', () => require('./text-styles.html'));
