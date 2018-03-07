//react imports
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//component imports
import App from './components/App';

//style imports
import './stylesheets/app.min.css';

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
