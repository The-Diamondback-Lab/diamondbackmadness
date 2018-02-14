import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/pages/home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/contact';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='projects' component={Projects} />
    <Route path='contact' component={Contact} />
    <Route path='*' component={Home} />
  </Route>
);

export default routes;