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
      case 1:
        numMatches = 8;
        break;
      case 2:
        numMatches = 4;
        break;
      case 3:
        numMatches = 2;
        break;
      case 4:
        numMatches = 1;
        break;
      default:
        numMatches = 16;
        break;
    }
    return numMatches;
  }

  getMatches() {
    let numMatches = this.getNumMatches();
    let matches = [];

    if (this.props.participants.length !== 1) {
      let max = this.props.participants.length - 1;
      for (let i = 0; i < max / 2; i++) {
        let comp1 = this
          .props
          .participants[i];
        let comp2 = this
          .props
          .participants[max - i];
        matches.push(
          <Match
            key={i}
            active={this.props.active}
            week={this.props.week}
            empty={false}
            comp1={comp1}
            comp2={comp2}/>
        );
      }
    } else {
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
        title = 'March 16 - 20th';
        break;
      case 2:
        title = 'March 20 - 24th';
        break;
      case 3:
        title = 'March 24 - 28th';
        break;
      case 4:
        title = 'March 28 - 30th';
        break;
      default:
        title = 'March 12 - 16th';
        break;
    }

    return (
      <div className={style}>
        <h4 id={id} className='round-title'>{title}</h4>
        <div className='match-container'>
          {this.getMatches()}
        </div>
      </div>
    );

  }

}
