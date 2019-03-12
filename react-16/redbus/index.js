import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import CountrySearch from './CountrySearch';
import New from './New';

ReactDOM.render(<New />, document.getElementById('root'));
registerServiceWorker();