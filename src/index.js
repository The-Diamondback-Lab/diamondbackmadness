import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app';

import './stylesheets/app.min.css';

ReactDom.render(
  <App />,
  document.querySelector('#root')
);