//react imports
import React, {Component} from 'react';

//component imports
import Match from './Match';

export default class Bracket extends Component {

  constructor(props) {
    super(props);
    this.getMatches = this
      .getMatches
      .bind(this);
  }

  getMatches = () => {
    let matches = [];
    let max = this.props.participants.length - 1;
    let comp1,
      comp2;

    for (let i = 0; i < max / 2; ++i) {
      comp1 = this
        .props
        .participants[i];
      comp2 = this
        .props
        .participants[max - i];

      matches.push(
        <Match key={i} week={this.props.week} comp1={comp1} comp2={comp2}/>
      );
    }
    return matches;
  }

  render = () => {
    return (
      <div className='bracket' id={`bracket${this.props.week}`}>
        {this.getMatches()}
      </div>
    );

  }

}
