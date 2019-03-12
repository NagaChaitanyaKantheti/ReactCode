import {INCREMENT,DECREMENT} from '../Constants/demoConstants';

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
