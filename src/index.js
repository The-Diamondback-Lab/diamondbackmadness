import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import './stylesheets/app.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

registerServiceWorker();
