import React from 'react';
import 'uikit/dist/css/uikit.css';

const Label = ({ children, style }) => (
  <span className={`uk-label ${style && `uk-label-` + style}`}>{children}</span>
);

export default Label;
