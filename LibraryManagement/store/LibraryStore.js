import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {libraryReducer as data} from '../Reducers/LibraryReducer';

let initialState = {
    data:{
        count:0,
        bagList:[],
        booksList:[],
        usersList:[],
        uname:''
    }
}
export let libraryStore = createStore( combineReducers ({data}),  initialState)