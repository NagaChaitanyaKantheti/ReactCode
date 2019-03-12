import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {ideaBoardReducer as data} from '../Reducers/IdeaBoardReducer';

let initialState = {
    data:{
        ideaList:[],
        archiveList:[],
        editFlag:false,
        id:0
    }
}
export let ideaBoardStore = createStore( combineReducers ({data}),  initialState)