//react imports
import React, {Component} from 'react';

//config imports
import DATABASE from '../config/firebase';

export default class Vote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          id: 'companya',
          name: 'Company A',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin, risu' +
              's nec finibus imperdiet, metus mauris tincidunt nunc, et dapibus lorem elit no' +
              'n lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultric' +
              'ies, odio at ultricies pharetra, eros purus tincidunt erat, vitae mattis nulla' +
              ' magna in velit'
        }, {
          id: 'companyb',
          name: 'Company B',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin, risu' +
              's nec finibus imperdiet, metus mauris tincidunt nunc, et dapibus lorem elit no' +
              'n lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultric' +
              'ies, odio at ultricies pharetra, eros purus tincidunt erat, vitae mattis nulla' +
              ' magna in velit'
        }, {
          id: 'companyc',
          name: 'Company C',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin, risu' +
              's nec finibus imperdiet, metus mauris tincidunt nunc, et dapibus lorem elit no' +
              'n lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultric' +
              'ies, odio at ultricies pharetra, eros purus tincidunt erat, vitae mattis nulla' +
              ' magna in velit'
        }, {
          id: 'companyd',
          name: 'Company A',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin, risu' +
              's nec finibus imperdiet, metus mauris tincidunt nunc, et dapibus lorem elit no' +
              'n lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultric' +
              'ies, odio at ultricies pharetra, eros purus tincidunt erat, vitae mattis nulla' +
              ' magna in velit'
        }
      ]
    }
  }

  /* issue here */
  componentDidMount() {
    document
      .getElementById('header')
      .style
      .backgroundColor = '#252525';
    let data = null;
    DATABASE
      .ref('companies')
      .once('value')
      .then((snapshot) => {
        data = snapshot.val(); //returning null
      });
    alert(data);
  }

  render() {
    return (<div id="vote">
      <div className="wrapper"></div>
    </div>);
  }
}
