import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './Components/App';
import { register as registerServiceWorker } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
