//react imports
import React, {Component} from 'react';

//component imports
import Match from './Match';

export default class Round extends Component {

  constructor(props) {
    super(props);
    this.getNumMatches = this
      .getNumMatches
      .bind(this);
    this.getMatches = this
      .getMatches
      .bind(this);
  }

  getNumMatches() {
    let numMatches;
    switch (this.props.week) {
      case 0:
        numMatches = 16;
        break;
      case 1:
        numMatches = 16;
        break;
      case 2:
        numMatches = 8;
        break;
      case 3:
        numMatches = 4;
        break;
      case 4:
        numMatches = 2;
        break;
      case 5:
        numMatches = 1;
        break;
      default:
        numMatches = 0;
        break;

    }
    return numMatches;
  }

  getMatches() {
    let numMatches = this.getNumMatches();
    let matches = [];

    if (!this.props.active) {
      for (let i = 0; i < numMatches; i++) {
        matches.push(
          <Match
            key={i}
            week={this.props.week}
            active={this.props.active}
            empty={true}
            comp1={null}
            comp2={null}/>
        );
      }
      return matches;
    }

    if (this.props.participants.length !== 1) {
      let max = this.props.participants.length;
      if (this.props.bye) {
        for (let i = 0; i < max; i++) {
          let comp1 = this
            .props
            .participants[i];
          matches.push(
            <Match
              key={i}
              active={this.props.active}
              week={this.props.week}
              empty={false}
              comp1={comp1}
              comp2={null}
              bye={true}/>
          );
        }
      } else {

        for (let i = 0; i < max / 2; i++) {
          let comp1 = this
            .props
            .participants[i];
          let comp2 = this
            .props
            .participants[max - i - 1];
          matches.push(
            <Match
              key={i}
              matchId={i}
              active={this.props.active}
              week={this.props.week}
              disabled={this.props.disabled}
              empty={false}
              comp1={comp1}
              comp2={comp2}
              bye={false}/>
          );
        }
      }
    }
    return matches;
  }

  render = () => {
    let id = 'round' + this.props.week;
    let style = (this.props.active)
      ? 'round active'
      : 'round';

    let title;
    switch (this.props.week) {
      case 1:
        title = 'March 17 - 21st';
        break;
      case 2:
        title = 'March 21 - 25th';
        break;
      case 3:
        title = 'March 25 - 29th';
        break;
      case 4:
        title = 'March 29 - 31st';
        break;
      case 5:
        title = 'March 31st - April 1st';
        break;
      default:
        title = 'March 14 - 17th';
        break;
    }

    return (
      // if (matches == []){   let matches = <h3>Coming Soon!</h3> } else{   let
      // matches = this.getMatches(); }
      <div className={style}>
        <h4 id={id} className='round-title'>{title}</h4>
        <div className='match-container'>
          {this.getMatches()}
        </div>
      </div>
    );

  }

}
