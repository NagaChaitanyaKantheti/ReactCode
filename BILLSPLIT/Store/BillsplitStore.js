import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {billSplitReducer as bill} from '../Reducers/billSplitReducer';

let initialState = {
    bill:{
        data:[],
        editFlag:false
    }
}
export let store = createStore( combineReducers ({bill}),  initialState)