//react imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      company: '',
      hasOnClick: false,
      href: '',
      id: '',
      text: ''
    }
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState(
      {company: `${this.props.company}`, hasOnClick: this.props.hasOnClick, href: `${this.props.href}`, id: `${this.props.id}`, text: `${this.props.text}`}
    );
  }

  /*
		1. get current vote based on this.state.company
		2. update current vote amount
		3. update this.state.clicked and disable current user from voting for company again during current voting period (?)
	 */
  onClick() {}

  render() {
    return (
        (!this.state.hasOnClick)
        ? <Link className='btn' id={this.state.id} to={this.state.href}>
          {this.state.text}
        </Link>
        : <Link
          className='btn'
          id={this.state.id}
          to={this.state.href}
          onClick={this.onClick}>
          {this.state.text}
        </Link>
      );
  }

}
