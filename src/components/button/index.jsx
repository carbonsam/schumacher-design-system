import React from 'react';
import 'uikit/dist/css/uikit.css';

const Button = ({ children, style, size, fullWidth, ...rest }) => (
  <button
    className={`uk-button uk-button-${style || 'default'} ${size &&
      'uk-button-' + size} ${fullWidth && 'uk-width-1-1'}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
