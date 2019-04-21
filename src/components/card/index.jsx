import React from 'react';
import 'uikit/dist/css/uikit.css';

const Card = ({ children, title, style, ...rest }) => {
  return (
    <div
      className={`uk-card uk-card-body uk-card-${style || 'default'}`}
      {...rest}
    >
      {title && <h3 className="uk-card-title">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
