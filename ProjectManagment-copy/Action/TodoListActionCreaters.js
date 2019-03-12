import {ADD_TODO,DELETE_TODO,COMPLETED,FILTER,EDIT_PRIORITY, FETCH_DATA, FETCH_DETAILS} from '../Constants/TodoListActions';

export function add_todo(object){
    return{
        type:ADD_TODO,
        object:object
    }
}

export function delete_todo(index){
    return{
        type:DELETE_TODO,
        index:index
    }
}

export function completed(index){
    return{
        type:COMPLETED,
        index:index
    }
}

export function filter(showlist){
    return{
        type:FILTER,
        showlist:showlist
        
    }
}


export function edit_priority(index,value){
    console.log("ramya"+value)
    return{
        type:EDIT_PRIORITY,
        index:index,
        value:value,
        
    }
}

export function fetchData(organizationList){
    return{
        type:FETCH_DATA,
        organizationList:organizationList
    }
}

export function fetchDetails(detailsList){
    return{
        type:FETCH_DETAILS,
        detailsList:detailsList
    }
}