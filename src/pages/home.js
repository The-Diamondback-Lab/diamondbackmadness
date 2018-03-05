import React, {Component} from 'react';

import Button from '../components/button';

import $ from 'jquery';

export default class Home extends Component {

  componentDidMount() {
    $('header').css('background-color', 'transparent');
    $('header').css('position', 'absolute');
    $('header').css('z-index', '10');
  }

  componentWillUnmount() {
    $('header').css('position', 'relative');
  }

  render() {
    return (
      <div id="home">
        <div className="wrapper">

          <h1>
            Brackets.
            <br/>Are.
            <br/>Back.
          </h1>

          <Button id='btn-home' href='/vote' text='VOTE NOW'/>
        </div>
      </div>
    );
  }
}
