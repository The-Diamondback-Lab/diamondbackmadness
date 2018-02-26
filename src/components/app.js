import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from '../pages/home';
import Vote from '../pages/vote';
import Header from './header';

import '../stylesheets/normalize.min.css';
import '../stylesheets/app.min.css';

export default class App extends Component {

	render() {
		return(
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path='/' component={Home} />
					<Route exact path='/vote' component={Vote} />
					{this.props.children}
				</div>
			</BrowserRouter>
		);
	}
	
}