import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {counterReducer as count} from '../Reducers/demoReducer';

let initialState = {
    count:0
}
export let store = createStore( combineReducers ({count}),  initialState)