import React from 'react';
import feather from 'feather-icons';
import 'uikit/dist/css/uikit.css';

/*
  icon = id of feather icon
*/

const Icon = ({ icon = 'zap' }) => (
  <span dangerouslySetInnerHTML={{ __html: feather.icons[icon].toSvg() }} />
);

export default Icon;
