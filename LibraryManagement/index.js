import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router'
// import RouterDemo from "./modules/RouterDemo";
// import About from './modules/About';
// import Contact from './modules/Contact';
// import TodoList from "./Component/TodoList";
// import OrganizationList from "./modules/OrganizationList";
import { libraryStore } from "./store/LibraryStore";
// import Details from './modules/Details';
// import Organization from './modules/Organization';
import Library from "./Component/Library";
import Bag from "./Component/Bag";
import Home from "./Component/Home";
import NewUser from "./Component/NewUser";


render((<Provider store={libraryStore}>
    <Router history={hashHistory}>
        <Route path='/' component={Home}/>
            <Route path='/NewUser' component={NewUser}/>
         <Route path='/Library' component={Library}/>
        <Route path='/Bag' component={Bag}/>
        </Router>
</Provider>    
), document.getElementById('app'));


// <Provider store={todoListStore}>
//         <Router history={hashHistory}>
//             <Route path="/" component={RouterDemo}>
//                 <IndexRoute component={About}/>
//                 <Route path="/About" component={About}/>
//                 <Route path="/Contact" component={Contact}/>
//                 <Route path="/TodoList" component={TodoList} />
//                 <Route path="/Organization" component={Organization}>
//                     <Route path="/OrganizationList" component={OrganizationList}/>
//                     <Route path="/Details/:unique_id" component={Details}/>
//                     <IndexRedirect to="/OrganizationList"/>
//                 </Route>
//             </Route>
//         </Router>
//     </Provider>