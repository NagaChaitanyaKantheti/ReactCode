import {ADD_IDEA,EDIT_IDEA, DELETE_IDEA, CHANGE_EDIT_FLAG, ARCHIVELIST, CHANGE_PINNED_FLAG, UPDATE_ID} from '../Constants/IdeaBoardConstants';

export function addIdea(object){
    return{
        type:ADD_IDEA,
        object:object
    }
}

export function changeEditFlag(){
    return{
        type:CHANGE_EDIT_FLAG,
    }
}

export function changePinnedFlag(){
    return{
        type:CHANGE_PINNED_FLAG,
    }
}

export function editIdea(index,object){
    return{
        type:EDIT_IDEA,
        index:index,
        object:object
    }
}

export function updateId(id){
    return{
        type:UPDATE_ID,
        id:id
    }
}

export function deleteIdea(index){
    return{
        type:DELETE_IDEA,
        index:index
    }
}

export function addToArchiveList(index){
    return{
        type:ARCHIVELIST,
        index:index
    }
}
