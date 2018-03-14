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
        .value = 'VOTED';
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
    let matchId1 = this.props.participant.name + this.props.participant.competitor;
    matchId1 = matchId1.replace(/\s/g, '');
    let matchId2 = this.props.participant.competitor + this.props.participant.name;
    matchId2 = matchId2.replace(/\s/g, '');

    let id = 'vote-' + (
      this.props.participant.name
    ).replace(/ /g, '');
    let button;
    if (localStorage.getItem(matchId1) || localStorage.getItem(matchId2)) {
      button = <button className='btn vote-btn voted' id={id} onClick={(e) => e.preventDefault()} disabled>VOTED</button>
    } else {
      button = <button
        className='btn vote-btn'
        id={id}
        onClick={(e) => {
          this.setState({clicked: true});
          this.updateVotes(e);
          let otherButton = "vote-"+(this.props.participant.competitor.replace(/\s/g, ''));
          document.getElementById(otherButton).disabled = true;
          document.getElementById(otherButton).innerHTML = "VOTED";
          localStorage.setItem(matchId1, true);
          localStorage.setItem(matchId2, true);
        }}>CAST YOUR VOTE</button>
    }

    return (button);
  }

}
