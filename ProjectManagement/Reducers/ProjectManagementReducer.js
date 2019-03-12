import {ADD_PROJECT, ADD_STAGE, ADD_TASK} from '../Constants/ProjectManagementActions';

export function projectManagementReducer(currentState={},action){
    switch(action.type){
        case ADD_PROJECT:{
            let temp=[...currentState.projectList]
            temp.push(action.object)
            return Object.assign({}, currentState, {projectList:temp})
        }

        
        case ADD_STAGE:{
            let temp=[...currentState.projectList[action.projectId].stages]
            let temp1=[...currentState.projectList]
            temp.push(action.object)
            temp1[action.projectId].stages=temp
            return Object.assign({},currentState,{projectList:temp1})
        }

        case ADD_TASK:{
            let temp=[...currentState.projectList[action.projectId].stages[action.stageId].tasks]
            let temp2=[...currentState.projectList]
            temp.push(action.object)
            temp2[action.projectId].stages[action.stageId].tasks=temp
            return Object.assign({},currentState,{projectList:temp2})
        }

        default:   return currentState
    }
}