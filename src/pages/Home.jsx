//react imports
import React, {Component} from 'react';

//component imports
import Button from '../components/Button';

export default class Home extends Component {

  componentDidMount() {
    let header = document.getElementById('header');
    header.style.backgroundColor = 'transparent';
    header.style.position = 'absolute';
    header.style.zIndex = 10;
  }

  componentWillUnmount() {
    let header = document.getElementById('header');
    header.style.position = 'relative';
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
