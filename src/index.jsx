import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

import './stylesheets/app.css'

ReactDom.render(
  <Router history={browserHistory} routes={routes}>
  </Router>,
  document.querySelector('#app')
);