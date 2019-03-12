import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {caculatorReducer as calc} from '../Reducers/ToDoListReducer';

let initialState = {
    data:{
        state:''
    }
}
export let calculatorStore = createStore( combineReducers ({calc}),  initialState)