import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {organizationReducer as organization} from '../Reducers/OrganizationReducers';

let initialState = {
    organization:{
        active_organization:[],
        countryList:[],
        timeZoneList:[],
        form_flag:false,
        editIndex:'',
        editFlag:false,
        buttonFlag:false,
        deactive_organization:[],
        checkedList:[],
        displayListStatus:'active',
        inactiveEditFalg:false,
        inactiveCheckedList:[]
    }
}
export let organizationStore = createStore(combineReducers ({organization}),  initialState)