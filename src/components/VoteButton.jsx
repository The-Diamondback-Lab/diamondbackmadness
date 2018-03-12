//react imports
import React, {Component} from 'react';

//config imports
import DATABASE from '../config/firebase';
import * as Utilities from '../config/utils.js';

export default class VoteButton extends Component {

  constructor(props) {
    super(props);
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
      })
    e.preventDefault();
  }

  render() {
    return (
      <button className='btn vote-btn' id={this.props.id} onClick={this.updateVotes}>
        CAST VOTE
      </button>
    );
  }

}
