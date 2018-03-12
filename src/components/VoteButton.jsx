//react imports
import React, {Component} from 'react';

//config imports
import DATABASE from '../config/firebase';
import * as Utilities from '../config/utils.js';

export default class VoteButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.updateVotes = this
      .updateVotes
      .bind(this);
  }

  updateVotes = (e) => {
    Utilities
      .search(this.props.week, this.props.participant.name)
      .then((ref) => {
        let votesRef = DATABASE.ref(this.props.week + '/' + ref + '/votes');
        votesRef.transaction(function (votes) {
          return votes + 1;
        });
      });
    e.preventDefault();
  }

  componentDidMount = () => {
    let id = 'vote-' + (
      this.props.participant.name
    ).replace(/ /g, '');

    if (this.state.clicked) {
      document
        .getElementById(id)
        .value = 'CAST';
      document
        .getElementById(id)
        .classList
        .add('clicked');
      document
        .getElementById(id)
        .style
        .backgroundColor = '#e31936';
    } else {
      document
        .getElementById(id)
        .value = 'CAST YOUR VOTE';
      document
        .getElementById(id)
        .style
        .backgroundColor = '#252525';
    }
  }

  render() {
    let id = 'vote-' + (
      this.props.participant.name
    ).replace(/ /g, '');
    let button;
    if (this.state.clicked) {
      button = <button className='btn vote-btn' id={id} onClick={(e) => e.preventDefault()}>CAST</button>
    } else {
      button = <button
        className='btn vote-btn'
        id={id}
        onClick={(e) => {
          this.setState({clicked: true});
          this.updateVotes(e);
        }}>CAST YOUR VOTE</button>
    }

    return (button);
  }

}
