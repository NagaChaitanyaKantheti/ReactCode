import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {toDoListReducer as data} from '../Reducers/ToDoListReducer';

let initialState = {
    data:{
        todoList:[],
        completedList:[],
        completedFlag:'todolist',
        organizationList:[],
        detailsList:[]
    }
}
export let todoListStore = createStore( combineReducers ({data}),  initialState)