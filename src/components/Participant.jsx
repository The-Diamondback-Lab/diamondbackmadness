//react imports
import React, {Component} from 'react';

export default class Participant extends Component {

  render = () => {
    let style,
      name;
    if (this.props.participant !== null) {
      style = 'participant';
      name = this.props.participant.name
    } else {
      style = 'participant participant-empty';
      name = 'Match Winner';
    }

    return (
      <div className={style}>
        <p className='p-name'>{name}</p>
        <i className="fas fa-info-circle info"></i>
      </div>
    );
  }

}
