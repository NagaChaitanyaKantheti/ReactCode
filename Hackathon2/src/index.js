import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { Router, Route, hashHistory,IndexRoute,IndexRedirect } from 'react-router'
import RouterDemo from "./modules/RouterDemo";
import About from './modules/About';
import Contact from './modules/Contact';
import TodoList from "./Component/TodoList";
import OrganizationList from "./modules/OrganizationList";
import { todoListStore } from "./store/TodoListStore";
import Details from './modules/Details';
import Organization from './modules/Organization';


render((
    <Provider store={todoListStore}>
        <Router history={hashHistory}>
            <Route path="/" component={RouterDemo}>
                <IndexRoute component={About}/>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/TodoList" component={TodoList} />
                <Route path="/Organization" component={Organization}>
                    <Route path="/OrganizationList" component={OrganizationList}/>
                    <Route path="/Details/:unique_id" component={Details}/>
                    <IndexRedirect to="/OrganizationList"/>
                </Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));

