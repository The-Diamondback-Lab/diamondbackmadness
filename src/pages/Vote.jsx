//react imports
import React, {Component} from 'react';

//config imports
import DATABASE from '../config/firebase';

export default class Vote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }
  }

  componentDidMount = () => {
    document.getElementById('header').style.backgroundColor = '#252525';
    DATABASE.ref('companies').once('value', (snapshot) => {
      this.setState({companies: snapshot.val()});
      return true;
    });
  }

  render() {
    return (
      <div id="vote">
        <div className="wrapper">
          <h1>Vote</h1>
        </div>
      </div>
    );
  }
}
