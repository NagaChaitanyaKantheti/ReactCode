import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {projectManagementReducer as project} from '../Reducers/ProjectManagementReducer';

let initialState = {
    project:{
        projectList:[],
    }
}
export let projectManagementStore = createStore(combineReducers ({project}),  initialState)