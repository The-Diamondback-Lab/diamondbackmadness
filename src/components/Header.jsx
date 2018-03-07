//react imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

  render() {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return (
      <header id='header'>
        <div className="wrapper">
          <Link exact="exact" to='/' id="title">
            <h1>
              DBK<span>MADNESS</span>
            </h1>
          </Link>

          {
            /* Go to www.addthis.com/dashboard to customize your tools */
            (width <= 615)
              ? <div className="addthis_sharing_toolbox_mzm7"></div>
              : <div className="addthis_sharing_toolbox"></div>
          }
        </div>
      </header>
    );
  }

}
