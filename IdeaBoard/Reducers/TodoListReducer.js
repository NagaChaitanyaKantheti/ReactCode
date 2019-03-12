import {ADD_TODO, EDIT_PRIORITY, DELETE_TODO, COMPLETED, FILTER,FETCH_DATA,FETCH_DETAILS} from '../Constants/TodoListActions';

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
            temp[action.index].priority=action.value
            return Object.assign({},currentState,{todoList:temp})
        }

        case FETCH_DATA:{
         
            return Object.assign({},currentState,{organizationList:action.organizationList})
        }


        case FETCH_DETAILS:{
            return Object.assign({},currentState,{detailsList:action.detailsList})
        }

        default: return currentState;
    }
}