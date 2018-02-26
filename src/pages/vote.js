import React, { Component } from 'react';

import $ from 'jquery';

import database from '../config/firebase';

import Company from '../components/companyblock';


export default class Vote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: []
    }
  }
	
	componentDidMount() {
    $('header').css('background-color', '#252525');
    this.setState({teams: database.ref()});
    alert(database.ref());
  }

  render() {
    return (
      <div id="vote">
        <div className="wrapper">
          
          <Company />
            
        </div>
      </div>
    );
  }
}