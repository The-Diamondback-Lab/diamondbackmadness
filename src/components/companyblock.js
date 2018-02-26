import React, { Component } from 'react';

import $ from 'jquery';

export default class Company extends Component {
	
	componentDidMount() {
    $('header').css('background-color', '#252525');
  }

  render() {
    return (
      <div className="company-block">
        <p>Company A</p>
        <button></button>
      </div>
    );
  }
}