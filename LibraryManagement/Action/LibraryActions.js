import { API_DATA, ADD_TO_BAG, INCREMENT, REMOVE_FROM_BAG, CREATE_ACCOUNT, USER } from "../Constants/LibraryConstants";

export function apiData(result){
    return{
        type:API_DATA,
        result:result
    }
}

export function addToBag(checkedList){
    return{
        type:ADD_TO_BAG,
        checkedList:checkedList
    }
}

export function increment(){
    return{
        type:INCREMENT,
    }
}

export function removeFromBag(id){
    return{
        type:REMOVE_FROM_BAG,
        id:id
    }
}

export function user(uname){
    return{
        type:USER,
        uname:uname
    }
}

export function createAccount(object){
    return{
        type:CREATE_ACCOUNT,
        object:object
    }
}