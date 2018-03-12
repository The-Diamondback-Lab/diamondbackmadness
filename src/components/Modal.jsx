//react imports
import React, {Component} from 'react';

//component imports
import VoteButton from './VoteButton.jsx';

export default class Modal extends Component {

  constructor(props) {
    super(props);
    this.getWinner = this
      .getWinner
      .bind(this);
  }

  getWinner = () => {
    return (this.props.comp1.votes > this.props.comp2.votes)
      ? this.props.comp1.name
      : this.props.comp2.name;
  }

  render = () => {
    let comps = [],
      buttons = [];
    comps.push(this.props.comp1, this.props.comp2);
    for (let i = 0; i < comps.length; i++) {
      if (this.props.active) {
        buttons.push(
          <VoteButton key={i} week={this.props.week} participant={comps[i]}/>
        );
      } else {
        buttons.push(
          <VoteButton
            key={i}
            id='disabled'
            week={this.props.week}
            participant={comps[i]}/>
        );
      }
    }

    let activeModal = <div className='modal'>
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
    </div>;

    let nonActiveModal = <div className='modal'>
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
        <h4 className='winner-name'>Winner: {this.getWinner()}</h4>
      </div>
    </div>;

    let modal = (this.props.active)
      ? activeModal
      : nonActiveModal;

    modal = (this.props.show)
      ? modal
      : null;

    return (modal);
  }
}
