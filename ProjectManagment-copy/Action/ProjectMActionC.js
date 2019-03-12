import {ADD_PROJECT,ADD_STAGE, ADD_TASK} from '../Constants/ProjectManagementActions';

export function addProject(object){
    return{
        type:ADD_PROJECT,
        object:object
    }
}

export function addStage(object,projectId){
    return{
        type:ADD_STAGE,
        object:object,
        projectId:projectId
    }
}

export function addTask(object,projectId,stageId){
    return{
        type:ADD_TASK,
        object:object,
        projectId:projectId,
        stageId:stageId
    }
}