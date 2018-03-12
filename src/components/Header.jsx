//react imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

  render = () => {
    return (
      <header id='header'>
        <div className="wrapper" id='header-wrapper'>
          <Link exact="exact" to='/' id="title">
            <h1>
              DBK<span id='madness'>MADNESS</span>
            </h1>
          </Link>

          <div className="addthis_sharing_toolbox" id="add-this"></div>
        </div>
      </header>
    );
  }

}
