import React, {Component} from 'react';

import $ from 'jquery';

import DATABASE from '../config/firebase';

import Company from '../components/company';

export default class Vote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: []
    }
  }

  /* issue here */
  componentDidMount() {
    document
      .getElementById('header')
      .style
      .backgroundColor = '#252525';
    let data = null;
    DATABASE
      .ref('companies')
      .once('value')
      .then((snapshot) => {
        data = snapshot.val(); //returning null
      });
    alert(data);
  }

  render() {
    return (
      <div id="vote">
        <div className="wrapper">

          <Company/>

        </div>
      </div>
    );
  }
}
