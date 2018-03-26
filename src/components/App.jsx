//react imports
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//component imports
import Header from './Header';

//page imports
import Home from '../pages/Home';
import Vote from '../pages/Vote';

//style imports
import '../stylesheets/normalize.min.css';
import '../stylesheets/app.min.css';

//Google Analytics
import Analytics from 'react-router-ga';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Analytics id="UA-116382668-1" debug>
          <div>
            <Header/>
            <Route exact={true} path='/' component={Home}/>
            <Route exact={true} path='/vote' component={Vote}/> {this.props.children}
          </div>
        </Analytics>
      </BrowserRouter>
    );
  }

}
