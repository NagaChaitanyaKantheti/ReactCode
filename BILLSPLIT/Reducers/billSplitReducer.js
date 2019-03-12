import { ADD_DATA, UPDATE_DATA, EDIT_FLAG, EDIT_DATA } from '../Constants/billSplitConstants';

export function billSplitReducer(currentState=0,action){
    switch(action.type){
       case ADD_DATA:{
            let data=[...currentState.data]
            data.push(action.object)
            return Object.assign({},currentState,{data:data})
       }
        case UPDATE_DATA:{
            let data=[...currentState.data]
            data=action.object
            return Object.assign({},currentState,{data:data})
        }

        case EDIT_FLAG:{
            return Object.assign({},currentState,{editFlag:true})
        }

        case EDIT_DATA:{
            let data=[...currentState.data]
            data[action.i]=action.object
            return Object.assign({},currentState,{data:data},{editFlag:false})
        }

        default:
            return currentState;
    }
}