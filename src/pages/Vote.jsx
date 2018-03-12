//react imports
import React, {Component} from 'react';

//config imports
import DATABASE from '../config/firebase';

//component imports
import Round from '../components/Round';

export default class Vote extends Component {

  constructor(props) {
    super(props);
    this.state = {

      week0: [],
      week1: [],
      week2: [],
      week3: [],
      week4: []
    }

    this.ads = ["/assets/img/0.jpg","/assets/img/1.gif","/assets/img/2.gif","/assets/img/3.gif"];
    this.ads.sort(() => Math.random() * 2 - 1); //shuffle list of ad numbers
  }

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
  }

  componentDidMount = () => {
    let header = document.getElementById('header');
    header
      .classList
      .add('vote');
  }

  componentWillUnmount = () => {
    let header = document.getElementById('header');
    header
      .classList
      .remove('vote');
  }

  render = () => {
    return (
      <div id="vote">
        <div className='wrapper' id='vote-wrapper'>
          <div className = 'ads'>
            <img src = "/assets/img/banner2.jpg" width="40%" height="5%" alt="ad" />
            <br />
            <br />
            <img className = 'ad' src = {this.ads[0]} width="15%" height="10%" alt="ad" />
            <img className = 'ad' src = {this.ads[1]} width="15%" height="10%" alt="ad" />
            <img className = 'ad' src = {this.ads[2]} width="15%" height="10%" alt="ad" />
            <img className = 'ad' src = {this.ads[3]} width="15%" height="10%" alt="ad" />
          </div>

          <div className='round-titles'>
            <h4 className='round-title'>March 13 - 17th</h4>
            <h4 className='round-title'>March 17 - 21th</h4>
            <h4 className='round-title'>March 21 - 25th</h4>
            <h4 className='round-title'>March 25 - 29th</h4>
            <h4 className='round-title'>March 29 - 31st</h4>
          </div>

          <div className='rounds'>
            <Round week={0} active={true} participants={this.state.week0}/>
            <Round week={1} active={false} participants={this.state.week1}/>
            <Round week={2} active={false} participants={this.state.week2}/>
            <Round week={3} active={false} participants={this.state.week3}/>
            <Round week={4} active={false} participants={this.state.week4}/>
          </div>

          <div className = 'ads'>
            <img src = "/assets/img/banner1.jpg" width="40%" height="5%" alt="ad" />
            <br />
            <br />
            <img className = 'ad' src = {this.ads[0]} width="15%" height="10%" alt="ad" />
            <img className = 'ad' src = {this.ads[1]} width="15%" height="10%" alt="ad" />
            <img className = 'ad' src = {this.ads[2]} width="15%" height="10%" alt="ad" />
            <img className = 'ad' src = {this.ads[3]} width="15%" height="10%" alt="ad" />
          </div>
        </div>
      </div>
    );
  }
}
