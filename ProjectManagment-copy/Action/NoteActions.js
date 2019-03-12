import { ADD_NOTE, ADD_DESCRIPTION, DELETE_NOTE } from "../Constants/Note";

export function addNote(object){
    return {
        type:ADD_NOTE,
        object:object
    }
}

export function addDescription(description,id){
    return{
        type:ADD_DESCRIPTION,
        description:description,
        id:id
    }
}

export function deleteNote(id){
    return{
        type:DELETE_NOTE,
        id:id
    }
}