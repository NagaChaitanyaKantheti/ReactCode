import {CHANGE_FORM_FLAG,ADD_ORGANIZATION, EDIT_ORGANIZATION, FETCH_COUNTRYLIST, 
        FETCH_TIMEZONELIST, BUTTON_STATUS, DEACTIVE_ORGANIZATION, CHANGE_DISPLAY_STATUS, 
        INACTIVE_EDIT, ADD_INACTIVE_EDIT, ACTIVE_ORGANIZATION, CHECKED_LIST, INACTIVE_CHECKED_LIST} from '../Constants/OrganizationActions';

export function addOrganization(object){
    return{
    type:ADD_ORGANIZATION,
    object:object
    }
}

export function changeFormFlag(){
    return{
    type:CHANGE_FORM_FLAG
    }
}

export function editOrganization(editIndex){
    return{
        type:EDIT_ORGANIZATION,
        editIndex:editIndex
    }
}

export function fetchCountryList(countryList){
    return{
        type:FETCH_COUNTRYLIST,
        countryList:countryList,
    }
}

export function fetchTimeZoneList(timeZoneList){
    return{
        type:FETCH_TIMEZONELIST,
        timeZoneList:timeZoneList
    }
}

export function changeButtonStatus(flag){
    return{
        type:BUTTON_STATUS,
        flag:flag
    }
}

export function deactivateList(checkedList){
    return{
        type:DEACTIVE_ORGANIZATION,
        checkedList:checkedList
    }
}

export function changeDisplayStatus(status){
    return{
        type:CHANGE_DISPLAY_STATUS,
        status:status
    }
}

export function editInactiveOrganization(editIndex){
    return{
        type:INACTIVE_EDIT,
        editIndex:editIndex
    }
}

export function addInactiveEditOrganization(object){
    return{
        type:ADD_INACTIVE_EDIT,
        object:object
    }
}

export function activateOrganization(inactiveCheckedList){
    return{
        type:ACTIVE_ORGANIZATION,
        inactiveCheckedList:inactiveCheckedList
    }
}

export function checkedList(index){
    return{
        type:CHECKED_LIST,
        index:index
    }
}

export function inactiveCheckedList(index){
    return{
        type:INACTIVE_CHECKED_LIST,
        index:index
    }
}