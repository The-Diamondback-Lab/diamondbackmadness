//react imports
import React, {Component} from 'react';

//config imports
import DATABASE from '../config/firebase';
import * as Utilities from '../config/utils.js';

//component imports
import Modal from './Modal';
import Participant from './Participant';

export default class Match extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleModal = this
      .toggleModal
      .bind(this);
  }

  componentWillMount = () => {
    Utilities
      .search(this.props.week, this.props.comp1.name)
      .then((key) => {
        let compRef = DATABASE.ref(this.props.week + '/' + key);
        compRef.update({competitor: this.props.comp2.name});

      });
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render = () => {
    return (
      <a className='match' onClick={this.toggleModal}>
        <div className='participants'>
          <Participant participant={this.props.comp1}/>
          <Participant participant={this.props.comp2}/>
        </div>
        <Modal
          show={this.state.isOpen}
          onClose={this.toggleModal}
          comp1={this.props.comp1}
          comp2={this.props.comp2}/>
      </a>
    );
  }

}
