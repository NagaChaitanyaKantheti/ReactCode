import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import NewMainLayout from './NewMainLayout';
//import Demo from './Demo';

import CalendarApp from './Calendar';
ReactDOM.render(<CalendarApp/>, document.getElementById('root'));
registerServiceWorker();
