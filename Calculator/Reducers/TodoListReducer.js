import {ADD_TODO, EDIT_PRIORITY, DELETE_TODO, COMPLETED, FILTER,FETCH_DATA,FETCH_DETAILS} from '../Constants/TodoListActions';
//import { FILE } from 'dns';

export function toDoListReducer(currentState={},action){
    switch(action.type){
        case ADD_TODO:{
            const temp=[...currentState.todoList]
            temp.push(action.object)
            return Object.assign({}, currentState, {todoList:temp})   
        }
       
        case DELETE_TODO:{
            const temp=[...currentState.todoList]
            temp.splice(action.index,1)
            return Object.assign({},currentState,{todoList:temp})
        }


        case COMPLETED:{
            const temp=[...currentState.todoList]
            const temp1=[...currentState.completedList]
            temp1.push(temp[action.index])
            temp.splice(action.index,1)
            return Object.assign({},currentState,{todoList:temp},{completedList:temp1})
        }


        case FILTER:{
            const temp=action.showlist
            return Object.assign({},currentState,{completedFlag:temp})
        }


        case EDIT_PRIORITY:{
            const temp=[...currentState.todoList]
            console.log("hello"+action.value)
            temp[action.index].priority=action.value
            return Object.assign({},currentState,{todoList:temp})
        }

        case FETCH_DATA:{
            //let temp=[...currentState.organizationList]
            return Object.assign({},currentState,{organizationList:action.organizationList})
        }


        case FETCH_DETAILS:{
            //let temp=[...currentState.organizationList]
            console.log(hi)
            return Object.assign({},currentState,{detailsList:action.detailsList})
        }

        default: return currentState;
    }
}