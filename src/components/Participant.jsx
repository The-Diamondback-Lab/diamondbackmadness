//react imports
import React, {Component} from 'react';

export default class Participant extends Component {

  render = () => {
    return (
      <div className='participant'>
        <p className='p-name'>{this.props.participant.name}</p>
        <i className="fas fa-info-circle info"></i>
      </div>
    );
  }

}
