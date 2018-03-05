import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import $ from 'jquery';

export default class Header extends Component {

  render() {
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
            ($(window).width() <= 615)
              ? <div className="addthis_sharing_toolbox_mzm7"></div>
              : <div className="addthis_sharing_toolbox"></div>
          }
        </div>
      </header>
    );
  }

}
