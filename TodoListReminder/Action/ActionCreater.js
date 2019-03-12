import {INCREMENT,DECREMENT} from '../Constants/Actions';

export function increment(){
    return{
        type:INCREMENT
    } 
}


export function decrement(){
    return{
        type:DECREMENT
    }
}
