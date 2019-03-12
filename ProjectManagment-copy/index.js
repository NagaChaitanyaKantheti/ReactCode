import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { Router, Route, hashHistory,IndexRoute,IndexRedirect } from 'react-router'
import { noteStore } from "./store/NoteStore";
import MainApp from "./NoteApp/MainApp";
import Title from "./NoteApp/Title";
import Description from "./NoteApp/Description";


render((
    <Provider store={noteStore}>
        <Router history={hashHistory}>
          <Route path='/' component ={MainApp} />
          <Route path='/Title' component={Title}/>
          <Route path='/Description/:index' component={Description}/>
            
        </Router>
    </Provider>
), document.getElementById('app'));




// render((
//     <Provider store={projectManagementStore}>
//         <Router history={hashHistory}>
//             <Route path='/' component={MainLayout}/>
//             <Route path="/ProjectList" component={ProjectManagement}/>
//             <Route path="/ProjectAdd" component={ProjectForm} />
//             <Route path="/Project/:projectId/stageList" component={Stages} />
//             <Route path="/Project/:projectId/stageAdd" component={StageForm} />
//             <Route path='/Project/:projectId/stageList/:stageId/taskList' component={Tasks} />
//             <Route path='/Project/:projectId/stageList/:stageId/taskAdd' component={TaskForm}/>
//         </Router>
//     </Provider>
// ), document.getElementById('app'));

