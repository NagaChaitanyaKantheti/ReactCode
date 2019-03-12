import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {store} from './Store/BillsplitStore'
// import {Route,HashRouter} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import BillSplit from './Components/BillSplit';
// import CreateBill from './Components/CreateBill';
import registerServiceWorker from './registerServiceWorker';

//import BillForm from './Components/BillForm'
//import App from './App';
//import Sudoku from './Components/Sudoku';
//import DragDrop from './Components/DragDrop';
import Sudoku3 from './Components/Sudoku3';

ReactDOM.render((
    <Sudoku3/>
   
), document.getElementById('root'));
registerServiceWorker();

 // <Provider store={store}>
    //     <HashRouter><div>
    //             <Route path='/' exact component={BillSplit} />
    //             <Route path='/CreateBill' exact component={CreateBill}/>
    //             <Route path='/CreateBill/:index' component={CreateBill}/>
    //             </div>
    //     </HashRouter>
    // </Provider>