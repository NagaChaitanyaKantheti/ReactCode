import { ADD_DATA, UPDATE_DATA, EDIT_FLAG, EDIT_DATA } from "../Constants/billSplitConstants";

export function addData(object){
    return{
        type:ADD_DATA,
        object:object
    }
}

export function updateData(object){
    return{
        type:UPDATE_DATA,
        object:object
    }
}

export function editFlag(){
    return{
        type:EDIT_FLAG
    }
}

export function editData(object,i){
    return{
        type:EDIT_DATA,
        object:object,
        i:i
    }
}