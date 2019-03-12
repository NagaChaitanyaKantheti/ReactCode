import {INCREMENT,DECREMENT} from '../Constants/demoConstants';

export function counterReducer(currentState=0,action){
    switch(action.type){
        case INCREMENT:
            return currentState+1;
        case DECREMENT:
            return currentState-1;
        default:
            return currentState;
    }
}