//react imports
import React, {Component} from 'react';

//component imports
import VoteButton from './VoteButton.jsx';

export default class Modal extends Component {

  render = () => {
    let comps = [],
      buttons = [];
    comps.push(this.props.comp1, this.props.comp2);
    for (let i = 0; i < comps.length; i++) {
      buttons.push(<VoteButton key={i} participant={comps[i]}/>);
    }

    let modal = (this.props.show)
      ? <div className='modal'>
          <div className='modal-overlay'></div>
          <div className='modal-guts'>
            <a onClick={this.props.onClose} id='close'>
              &times;
            </a>
            <h1>CAST YOUR VOTE</h1>
            <div className='competitors'>
              <div className='comp'>
                <h2>About {comps[0].name}</h2>
                <p className='description'>{comps[0].description}</p>
                {buttons[0]}
              </div>
              <div className='comp'>
                <h2>About {comps[1].name}</h2>
                <p className='description'>{comps[1].description}</p>
                {buttons[1]}
              </div>
            </div>
          </div>
        </div>
      : null;

    return (modal);
  }
}
