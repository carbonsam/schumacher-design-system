import React from 'react';
import 'uikit/dist/css/uikit.css';

const Button = ({ children, ...rest }) => (
  <button className="uk-button uk-button-default" {...rest}>
    {children}
  </button>
);

export default Button;
