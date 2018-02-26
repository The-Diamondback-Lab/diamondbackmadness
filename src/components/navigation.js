import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {

	render() {
		return (
			<nav>
				{ /* Go to www.addthis.com/dashboard to customize your tools */ }
				<div class="addthis_sharing_toolbox"></div>
			</nav>
		);
	}
	
}
