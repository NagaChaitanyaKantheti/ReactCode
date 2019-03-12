import {CHANGE_FORM_FLAG,ADD_ORGANIZATION, EDIT_ORGANIZATION, FETCH_COUNTRYLIST, FETCH_TIMEZONELIST, BUTTON_STATUS, 
    DEACTIVE_ORGANIZATION, CHANGE_DISPLAY_STATUS, INACTIVE_EDIT, ADD_INACTIVE_EDIT,ACTIVE_ORGANIZATION, 
    CHECKED_LIST,INACTIVE_CHECKED_LIST} from '../Constants/OrganizationActions';

export function organizationReducer(currentState={},action){
    switch(action.type){
        case ADD_ORGANIZATION:{
            let temp=[...currentState.active_organization]
            const editIndex=currentState.editIndex
            const editFlag=currentState.editFlag
            if(editFlag){
                temp.splice(editIndex,1,action.object)
                const temp1=currentState.form_flag
                const temp2=currentState.editFlag
                return Object.assign({},currentState,{active_organization:temp},{form_flag:!temp1},{editFlag:!temp2})
            }
            else {
                temp.unshift(action.object)
                const temp1=currentState.form_flag
                return Object.assign({},currentState,{active_organization:temp},{form_flag:!temp1})
            }
            
        }
        case CHANGE_FORM_FLAG:{
            const temp=currentState.form_flag
            return Object.assign({},currentState,{form_flag:!temp})
        }

        case EDIT_ORGANIZATION:{
            const temp=currentState.editFlag
            let temp1=currentState.editIndex
            temp1=action.editIndex
            let temp2=currentState.form_flag
            return Object.assign({},currentState,{editIndex:temp1},{editFlag:!temp},{form_flag:!temp2})
        }

        case FETCH_COUNTRYLIST:{
            let temp=[...currentState.countryList]
            temp=action.countryList
            return Object.assign({},currentState,{countryList:temp})
        }

        case FETCH_TIMEZONELIST:{
            let temp1=[...currentState.timeZoneList]
            temp1=action.timeZoneList
            return Object.assign({},currentState,{timeZoneList:temp1})
        }

        case BUTTON_STATUS:{
            const temp=action.flag
            return Object.assign({},currentState,{buttonFlag:temp})
        }

        case DEACTIVE_ORGANIZATION:{
            let temp=[...currentState.active_organization]
            let temp1=[...currentState.deactive_organization]        
            for(let i in action.checkedList){
                temp1.push(temp[action.checkedList[i]])
                temp.splice(action.checkedList[i],1)
            }
            return Object.assign({},currentState,{active_organization:temp},{deactive_organization:temp1},{checkedList:[]})
        }


        case CHANGE_DISPLAY_STATUS:{
            let temp=currentState.displayListStatus
            temp=action.status
            return Object.assign({},currentState,{displayListStatus:temp})
        }


        case INACTIVE_EDIT:{
            let temp=currentState.inactiveEditFlag
            let temp1=currentState.editIndex
            temp1=action.editIndex
            let temp2=currentState.form_flag
            return Object.assign({},currentState,{editIndex:temp1},{inactiveEditFlag:!temp},{form_flag:!temp2})

        }

        case ADD_INACTIVE_EDIT:{
            const temp=currentState.inactiveEditFlag
            const temp1=currentState.form_flag
            let temp2=[...currentState.deactive_organization]
            let index=currentState.editIndex
            temp2.splice(index,1,action.object)
            return Object.assign({},currentState,{inactiveEditFlag:!temp},{form_flag:!temp1},{deactive_organization:temp2})
        }

        case ACTIVE_ORGANIZATION:{
            let temp=[...currentState.active_organization]
            let temp1=[...currentState.deactive_organization]        
            for(let i in action.inactiveCheckedList){
                temp.push(temp1[action.inactiveCheckedList[i]])
                temp1.splice(action.inactiveCheckedList[i],1)
            }
            return Object.assign({},currentState,{active_organization:temp},{deactive_organization:temp1},{inactiveCheckedList:[]})

        }

        case INACTIVE_CHECKED_LIST:{
            let inactiveCheckedList=[...currentState.inactiveCheckedList]
            let count=0
            for(let i in inactiveCheckedList){
                if(inactiveCheckedList[i]===action.index){
                    count++
                 }
             }
            if(count===0){
                inactiveCheckedList.push(action.index)
            }
            else{
                inactiveCheckedList=inactiveCheckedList.filter((i)=>{return i!=action.index})
            }
            return Object.assign({},currentState,{inactiveCheckedList:inactiveCheckedList})
        }


        case CHECKED_LIST:{
            let checkedList=[...currentState.checkedList]
            let count=0
            for(let i in checkedList){
                if(checkedList[i]===action.index){
                    count++
                 }
             }
            if(count===0){
                checkedList.push(action.index)
            }
            else{
                checkedList=checkedList.filter((i)=>{return i!=action.index})
            }
            return Object.assign({},currentState,{checkedList:checkedList})
        }

        default: 
            return currentState;
    }
}