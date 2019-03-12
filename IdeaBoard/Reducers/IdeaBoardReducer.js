import {ADD_IDEA, EDIT_IDEA, DELETE_IDEA, CHANGE_EDIT_FLAG, ARCHIVELIST, CHANGE_PINNED_FLAG} from '../Constants/IdeaBoardConstants';

export function ideaBoardReducer(currentState={},action){
    switch(action.type){
        case ADD_IDEA:{
            const temp=[...currentState.ideaList]
            let id=currentState.id+1
            temp.push(action.object)
            return Object.assign({}, currentState, {ideaList:temp},{editFlag:false},{id:id})   
        }

        case CHANGE_EDIT_FLAG:{
            return Object.assign({},currentState,{editFlag:true})
        }

        case CHANGE_PINNED_FLAG:{
            return Object.assign({},currentState,{pinnedFlag:true})
        }

        case EDIT_IDEA:{
            let temp=[...currentState.ideaList]
            temp.splice(action.index,1,action.object)
            return Object.assign({},currentState,{ideaList:temp},{editFlag:false})
        }

        case DELETE_IDEA:{
            let temp=[...currentState.ideaList]
            temp.splice(action.index,1,)
            return Object.assign({}, currentState, {ideaList:temp})
        }

        case ARCHIVELIST:{
            let ideaList=[...currentState.ideaList]
            let archiveList=[...currentState.archiveList]
            archiveList.push(ideaList[action.index])
            ideaList.splice(action.index,1)
            return Object.assign({}, currentState, {ideaList:ideaList},{archiveList:archiveList},{editFlag:false})
        }
        default: return currentState;
    }
}