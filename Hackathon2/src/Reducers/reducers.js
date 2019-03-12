import {INCREMENT,DECREMENT} from '../Constants/Actions';

export function counterReducer(currentState=0,action){
    console.log(action.type)
    switch(action.type){
        case INCREMENT:
            return currentState+1;
        case DECREMENT:
            return currentState-1;
        default:
            return currentState;
    }
}