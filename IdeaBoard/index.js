import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { Router, Route, hashHistory,IndexRoute,IndexRedirect } from 'react-router'
//import IdeaBoard from "./Component/IdeaBoard";
import {ideaBoardStore} from './store/IdeaBoardStore';
import Form from "./Component/Form";
import TodoListReminder from "./Component/TodoListReminder";
import Archive from "./Component/Archive";
// import New from './Component/New';

// render((<New/>),document.getElementById('app'))

render((
    <Provider store={ideaBoardStore}>
        <Router history={hashHistory}>
            <Route path='/' component={TodoListReminder} />
            <Route path='/Form' component={Form} />
            <Route path='/Archive' component={Archive}/>
            <Route path='/EditForm/:index' component={Form}/>
        </Router>
    </Provider>
), document.getElementById('app'));



// <Route path="/" component={RouterDemo}>
// <IndexRoute component={About}/>
// <Route path="/About" component={About}/>
// <Route path="/Contact" component={Contact}/>
// <Route path="/TodoList" component={TodoList} />
// <Route path="/Organization" component={Organization}>
//     <Route path="/OrganizationList" component={OrganizationList}/>
//     <Route path="/Details/:unique_id" component={Details}/>
//     <IndexRedirect to="/OrganizationList"/>
// </Route>
// </Route>