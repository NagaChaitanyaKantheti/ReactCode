import { API_DATA, ADD_TO_BAG, INCREMENT, REMOVE_FROM_BAG, CREATE_ACCOUNT, USER } from "../Constants/LibraryConstants";

export function libraryReducer(currentState={},action){
    switch(action.type){
        case API_DATA:{
            let booksList=[...currentState.booksList]
            let result=action.result
            for(let i=0;i<result.length;i++){
                booksList.push(result[i])
            }
            return Object.assign({},currentState,{booksList:booksList})
        }
        case ADD_TO_BAG:{
            let temp=[...currentState.bagList]
            let booksList=[...currentState.booksList]
            let checkedList=action.checkedList
            for(let i=0;i<checkedList.length;i++){
                for(let j=0;j<booksList.length;j++){
                    if(checkedList[i]===booksList[j].id){
                        temp.push(booksList[j])
                    }
                }
            }
            return Object.assign({},currentState,{bagList:temp})
        }


        case REMOVE_FROM_BAG:{
            let bagList=[...currentState.bagList]
            for(let i =0;i<bagList.length;i++){
                if(bagList[i].id===action.id){
                    bagList.splice(i,1)
                }
            }
            return Object.assign({},currentState,{bagList:bagList})
        }

        case INCREMENT:{
            let count=currentState.count
            count=count+1
            console.log('count>>>'+count)
           return Object.assign({},currentState,{count:count})
        }

        case USER:{
            let uname=action.uname
            return Object.assign({},currentState,{uname:uname})
        }

        case CREATE_ACCOUNT:{
            let usersList=[...currentState.usersList]
            usersList.push(action.object)
            return Object.assign({},currentState,{usersList:usersList})
        }


        default: return currentState
    }
}