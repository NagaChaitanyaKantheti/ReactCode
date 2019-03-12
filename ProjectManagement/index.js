import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { Router, Route, hashHistory,IndexRoute,IndexRedirect } from 'react-router'
import { projectManagementStore } from "./store/ProjectMangagementStore";
import ProjectManagement from "./projectComponents/ProjectManagement";
import ProjectForm from "./projectComponents/ProjectForm";
import Stages from './projectComponents/Stages';
import StageForm from "./projectComponents/StageForm";
import Tasks from "./projectComponents/Tasks";
import TaskForm from "./projectComponents/TaskForm";
import MainLayout from "./projectComponents/MainLayout";
import StagesParent from "./projectComponents/StagesParent";
import TasksParent from "./projectComponents/TasksParent";


render((
    <Provider store={projectManagementStore}>
        <Router history={hashHistory}>
            <Route path='/' component={MainLayout}/>
            <Route path="ProjectList" component={ProjectManagement}/>
            <Route path="ProjectAdd" component={ProjectForm} />
            <Route path="Project/:projectId" component={StagesParent}>
                <Route path="stageList" component={Stages} />
                <Route path="stageAdd" component={StageForm} />
                <Route path="stageList/:stageId" component={TasksParent}>
                    <Route path='taskList' component={Tasks} />
                    <Route path='taskAdd' component={TaskForm}/>
                    <IndexRedirect to="taskList"/>
                </Route>
                <IndexRedirect to="stageList"/>
            </Route>
            {/* </Route> */}
            
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

