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
      week4: [],
      week5: []
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

    let ad1 =
    (
    <div className = 'ads'>
      <img className = 'box' src = {this.ads[0]} alt="ad" />
      <img className = 'box' src = {this.ads[1]} alt="ad" />
      <img className = 'box' src = {this.ads[2]} alt="ad" />
      <img className = 'box' src = {this.ads[3]} alt="ad" />
    </div>);

    let ad2 =
    ( <a href = "http://www.vietowers.com" target = "_blank">
      <div className = 'ads'>
        <img className = 'banner' src = "/assets/img/banner1.jpg" alt="ad" />
      </div>
      </a>);

    var x = Math.floor((Math.random() * 2));

    if (x == 1){
      let temp = ad1;
      ad1 = ad2;
      ad2 = temp;
    }
    return (
      <div id="vote">
        <div className='wrapper' id='vote-wrapper'>
          <h1>Welcome to Diamondback Madness!<br /> Round 1 is live and closes on March 17 at 8 p.m. Vote below to support an organization</h1>

          {ad1}
          <a href = "http://www.vietowers.com" target = "_blank">
          <div className = 'ads'>
              <img className = 'banner' src = "/assets/img/banner2.jpg" alt="ad" />
          </div>
          </a>


          <div className='round-titles'>
            <h4 className='round-title'>Round 1: March 14 - 17th</h4>
            <h4 className='round-title'>Round 2: March 17 - 21st</h4>
            <h4 className='round-title'>Round 3: March 21 - 25th</h4>
            <h4 className='round-title'>Round 4: March 25 - 29th</h4>
            <h4 className='round-title'>Round 5: March 29 - 31st</h4>
            <h4 className='round-title'>Round 6: March 31 - April 1st</h4>
          </div>

          <div className='rounds'>
            <Round week={0} active={true} participants={this.state.week0} />
            <Round week={1} active={true} participants={this.state.week1} bye={true} />
            <Round week={2} active={false} participants={this.state.week2}/>
            <Round week={3} active={false} participants={this.state.week3}/>
            <Round week={4} active={false} participants={this.state.week4}/>
            <Round week={5} active={false} participants={this.state.week5}/>
          </div>

          {ad2}
        </div>
      </div>
    );
  }
}
