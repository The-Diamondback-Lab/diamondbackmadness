//react imports
import React, {Component} from 'react';

//config imports
import DATABASE from '../config/firebase';

//component imports
import Bracket from '../components/Bracket';

export default class Vote extends Component {

  constructor(props) {
    super(props);
    this.state = {

      week0: [],
      week1: [],
      week2: [],
      week3: [],
      week4: [],
      week5: [],
      week6: []
    }
  }

  /**
   * Gets the participant data from Firebase
   * @return {}
   */
  componentWillMount = () => {
    DATABASE
      .ref('/0/')
      .orderByKey()
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((child) => {
          let state = this
            .state
            .week0
            .concat(child.val());
          this.setState({week0: state})
        });
      });
    DATABASE
      .ref('/1/')
      .orderByKey()
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((child) => {
          let state = this
            .state
            .week1
            .concat(child.val());
          this.setState({week1: state})
        });
      });
    DATABASE
      .ref('/2/')
      .orderByKey()
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((child) => {
          let state = this
            .state
            .week2
            .concat(child.val());
          this.setState({week2: state})
        });
      });
    DATABASE
      .ref('/3/')
      .orderByKey()
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((child) => {
          let state = this
            .state
            .week3
            .concat(child.val());
          this.setState({week3: state})
        });
      });
    DATABASE
      .ref('/4/')
      .orderByKey()
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((child) => {
          let state = this
            .state
            .week4
            .concat(child.val());
          this.setState({week4: state})
        });
      });
    DATABASE
      .ref('/5/')
      .orderByKey()
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((child) => {
          let state = this
            .state
            .week5
            .concat(child.val());
          this.setState({week5: state})
        });
      });
    DATABASE
      .ref('/6/')
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((child) => {
          let state = this
            .state
            .week6
            .concat(child.val());
          this.setState({week6: state})
        });
      });
  }

  /**
   * Updates the header color
   * @return {}
   */
  componentDidMount = () => {
    document
      .getElementById('header')
      .style
      .backgroundColor = '#252525';
  }

  render = () => {
    let past0 = [];
    for (let i = 0; i < this.state.week0.length / 2; i++) {
      let participant = this
        .state
        .week0[i];
      let competitor = participant.competitor;
      let p = <p className='past-matchup' key={i}>{participant.name + ' vs ' + competitor}</p>
      past0.push(p);
    }

    return (
      <div id="vote">
        <div className='wrapper'>

          <div className='brackets-container'>
            <div className='brackets'>
              <Bracket week={0} participants={this.state.week0}/>
              <Bracket week={1} participants={this.state.week1}/>
              <Bracket week={2} participants={this.state.week2}/>
              <Bracket week={3} participants={this.state.week3}/>
              <Bracket week={4} participants={this.state.week4}/>
              <Bracket week={5} participants={this.state.week5}/>
              <Bracket week={6} participants={this.state.week6}/>
            </div>
          </div>

          <div className='past-matchups'>
            <h2>Past Matchups</h2>
            <div className='past-container'>
              <details className='week'>
                <summary>March 12 - 16th</summary>
                {past0}
              </details>
              <details className='week'>
                <summary>March 16 - 20th</summary>

              </details>
              <details className='week'>
                <summary>March 20 - 24th</summary>

              </details>
              <details className='week'>
                <summary>March 24 - 28th</summary>

              </details>
              <details className='week'>
                <summary>March 28 - 30th</summary>
              </details>
              <details className='week'>
                <summary>March 30 - April 2nd</summary>
              </details>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
