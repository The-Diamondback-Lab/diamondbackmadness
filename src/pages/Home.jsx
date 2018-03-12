//react imports
import React, {Component} from 'react';

//component imports
import Button from '../components/Button';

export default class Home extends Component {

  componentDidMount() {
    let header = document.getElementById('header');
    header
      .classList
      .add('home');
  }

  componentWillUnmount() {
    let header = document.getElementById('header');
    header
      .classList
      .remove('home');
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
