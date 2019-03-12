import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {noteReducer as note} from '../Reducers/NoteReducer';

let initialState = {
    note:{
        data:[]
    }
}
export let noteStore = createStore( combineReducers ({note}),  initialState)