//react imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Button extends Component {

  render() {
    return (
      <Link className='btn' id={this.props.id} to={this.props.href}>
        {this.props.text}
      </Link>
    );
  }

}
