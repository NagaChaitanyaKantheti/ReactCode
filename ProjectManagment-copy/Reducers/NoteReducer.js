import { ADD_NOTE, ADD_DESCRIPTION, DELETE_NOTE } from '../Constants/Note';

export function noteReducer(currentState=0,action){
    switch(action.type){
        case ADD_NOTE:{
            let temp=[...currentState.data]
            temp.push(action.object)
            return Object.assign({},currentState,{data:temp});
        }

        case ADD_DESCRIPTION:{
            let temp=[...currentState.data]
            temp[action.id].description=action.description
            return Object.assign({},currentState,{data:temp})
        }

        case DELETE_NOTE:{
            let temp=[...currentState.data]
            temp.splice(action.id,1)
            return Object.assign({},currentState,{data:temp})
        }

        default: return currentState;
    }
}