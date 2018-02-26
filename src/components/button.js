import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Button extends Component {
	
	render() {
		return (
			<Link id={this.props.id} className='btn' to={this.props.href}>
				{this.props.text}
			</Link>
		);
	}
	
}
