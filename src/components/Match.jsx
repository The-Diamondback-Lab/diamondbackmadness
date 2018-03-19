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
      isOpen: false,
      voted: false
    };
    this.toggleModal = this
      .toggleModal
      .bind(this);
  }

  componentWillMount = () => {
    if ((this.props.comp1 && this.props.comp2) !== null ) {
      Utilities
        .search(this.props.week, this.props.comp1.name)
        .then((key) => {
          let comp1Ref = DATABASE.ref(this.props.week + '/' + key);
          comp1Ref.update({competitor: this.props.comp2.name});
          Utilities
            .search(this.props.week, this.props.comp2.name)
            .then((key) => {
              let comp2Ref = DATABASE.ref(this.props.week + '/' + key);
              comp2Ref.update({competitor: this.props.comp1.name});

            });
        });
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render = () => {
    // let emptyMatch = (this.props.week !== 4)
    //   ?

      // : <div className='match'>
      //   <div className='participants'>
      //     <Participant participant={null}/>
      //   </div>
      // </div>;

    if (!this.props.empty && !this.props.bye && !this.props.disabled){
      let match =
      (<div className='match'>
        <div className='participants' role='button' onClick={this.toggleModal}>
          <Participant participant={this.props.comp1} info={true}/>
          <Participant participant={this.props.comp2} info={true}/>
        </div>
        <Modal
          active={this.props.active}
          week={this.props.week}
          show={this.state.isOpen}
          onClose={this.toggleModal}
          comp1={this.props.comp1}
          comp2={this.props.comp2}
          matchId={this.props.matchId}/>
      </div>);
      return (match);
    } else {
      let match =
      (<div className='match bye'>
        <div className='participants'>
          <Participant participant={this.props.comp1} info={false}/>
          <Participant participant={this.props.comp2} info={false}/>
        </div>
      </div>);
      return (match);
    }


  }

}
