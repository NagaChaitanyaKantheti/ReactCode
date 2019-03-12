import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,hashHistory} from 'react-router';
import RouterDemo from './RouterDemo';


ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={RouterDemo}/></Router>, document.getElementById('root'));
registerServiceWorker();