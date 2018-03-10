//react imports
import React, {Component} from 'react';

//import components
import Button from './Button';

export default class Company extends Component {

  constructor(props) {
    super(props);
    this.state = {
      competitor: '', //string
      description: '', //string
      eliminated: false, //boolean
      name: '', //string
      votes: 0 //int
    }
    this.onClick = this
      .onClick
      .bind(this);
  }

  onClick = () => {}

  componentDidMount() {
    this.setState(
      {competitor: `${this.props.competitor}`, description: `${this.props.description}`, eliminated: this.props.hasWon, name: `${this.props.name}`, votes: this.props.votes}
    );
    console.log(this.state);
  }

  render() {
    return (
      <div className='company-block'>

        <div className='company-info'>
          <p>{this.state.name}</p>
          <button onClick={this.onClick}></button>
        </div>

        <div className='company-modal'>

          <div className='competitor'>
            <p className='comapny-name'>{this.state.name}</p>
            <p className='company-description'>{this.state.description}</p>
            <Button
              className='company-votebtn'
              company={this.state.name}
              hasOnClick={true}
              text='VOTE'/>
          </div>

          <div className='competitor'>
            <p className='comapny-name'></p>
            <p className='company-description'></p>
            <Button
              className='company-votebtn'
              company={this.state.competitor}
              hasOnClick={true}
              text='VOTE'/>
          </div>

        </div>

      </div>
    );
  }
}
