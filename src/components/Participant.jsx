//react imports
import React, {Component} from 'react';

export default class Participant extends Component {

  render = () => {
    let style,
      name;
    if (this.props.participant !== null) {
      style = 'participant';
      name = this.props.participant.name
      if (this.props.participant.eliminated){
        style = 'participant eliminated';
      }
    } else {
      style = 'participant participant-empty';
      name = 'Match Winner';
    }

    var info = (<i className="fas fa-info-circle info"></i>);
    if (!this.props.info){
      info = "";
    }
    else{
      style += " participant-active";
    }

    return (
      <div className={style}>
        <p className='p-name'>{name}</p>
        {info}
      </div>
    );
  }

}
