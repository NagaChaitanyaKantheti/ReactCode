import React,{Component} from 'react';
import Header from './Header';

class NewMainLayout extends Component{
    constructor(){
        super();
        this.state={
            organizationInfo:[],
            timeZoneList:[],
            countryList:[],
            organizationName:'',
            address:'',
            timeZone:'',
            country:'',
            noOfEmployee:'',
            revenue:'',
            phoneNumber:'',
            isTimeZoneLoaded:false,
            isCountriesLoaded:false,

            formflag:false,
            editFlag:false,
            entryindex:'',
            pushflag:false,
            checkboxflag:false,
            deactivedList:[],
            checkedIndexList:[],
            deactivateflag:false,
            filter:'Active'
        }
    }


    displayDeactivatedList=(deactivateflag)=>{
        this.setState({
            deactivateflag:deactivateflag
        })
    }


    filterData=(filter)=>{
        this.setState({
            filter:filter
        })
    }


    handlecheckedList=(checkedIndex)=>{
        let checkedIndexList=this.state.checkedIndexList
        checkedIndexList.push(checkedIndex)
        this.setState({
            checkedIndexList:checkedIndexList
        })
    }


   handleDeactivatedList=()=>{
       let {checkedIndexList,deactivedList,organizationInfo}=this.state
       for(let i in checkedIndexList){
        deactivedList.push(organizationInfo[i])
       }
       for(let j in checkedIndexList){
           organizationInfo.splice(j,1)
       }
       this.setState({
            deactivedList:deactivedList,
            organizationInfo:organizationInfo
       })
       
   }

    handleCheckbox=()=>{
        //let checkedIndex=this.state
        //checkedIndex.push(index)
        //let {organizationInfo,deactivedList}=this.state
        //deactivedList.push(organizationInfo[index])
        //organizationInfo.splice(index,1)
        this.setState({
            checkboxflag:!this.state.checkboxflag
        })
    }


    changeformFlag=(formflag)=>{
        this.setState({
            formflag:formflag
        })
    }


    setData=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    setInfo=(formflag)=>{
        let {organizationInfo,organizationName,address,timeZone,country,noOfEmployee,revenue,phoneNumber}=this.state
        
        if(this.state.pushflag){
            console.log(this.state.editFlag)
            console.log(address)
            console.log(organizationName)
            //let organizationInfo=this.state.organizationInfo
           // organizationInfo.splice(this.state.entryindex,1,{organizationName,address,timeZone,country,noOfEmployee,revenue,phoneNumber})
            organizationInfo[this.state.entryindex]=[organizationName,address,timeZone,country,noOfEmployee,revenue,phoneNumber]
            this.setState({
                organizationInfo:organizationInfo,
                editFlag:false,
                formflag:formflag,
                pushflag:false,
                organizationName:'',
                address:'',
                timeZone:'',
                country:'',
                noOfEmployee:'',
                revenue:'',
                phoneNumber:'',
            });
        }
        else{
            organizationInfo.push([organizationName,address,timeZone,country,noOfEmployee,revenue,phoneNumber])
            this.setState({
                organizationInfo:organizationInfo,
                formflag:formflag,
                organizationName:'',
                address:'',
                timeZone:'',
                country:'',
                noOfEmployee:'',
                revenue:'',
                phoneNumber:'',
            })
        }
        //9494344493
    }

    handleEdit=(entry,index,formflag)=>{
        this.setState({
            formflag:formflag,
            organizationName:entry[0],
            address:entry[1],
            timeZone:entry[2],
            country:entry[3],
            noOfEmployee:entry[4],
            revenue:entry[5],
            phoneNumber:entry[6],
            entryindex:index,
            editFlag:true,
            pushflag:true
        })
    }


    render(){
        const {organizationName,address,noOfEmployee,organizationInfo}=this.state
        return(
            <div>
                {this.state.formflag? 
                    <div><table>
                    <tbody>
                    <tr>
                        <td>
                           Organization NAME*:
                        </td>
                        <td>
                            <input type="text" pattern="[a-z][A-Z]" name='organizationName' 
                            value={this.state.organizationName} 
                            onChange={this.setData}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Address*:
                        </td>
                        <td>
                            <textarea type="text" name='address' value={this.state.address}
                             onChange={this.setData} ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Timezone:
                        </td>
                        <td>
                            <select name='timeZone' value={this.state.timeZone}
                              onChange={this.setData}>
                              <option>Select Timezone</option>
                              {this.state.timeZoneList.map((entry,i)=>
                              <option>{entry.name+entry.code}</option>)}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Country:
                        </td>
                        <td>
                            <select name='country' value={this.state.country}
                              onChange={this.setData}>
                              <option>Select country</option>
                                {this.state.countryList.map((entry,i)=><option>{entry.name}</option>)}
                              </select>

                        </td>
                    </tr>

                    <tr>
                        <td>
                            NoOfEmployee*:
                        </td>
                        <td>
                            <input type="number" name='noOfEmployee' value={this.state.noOfEmployee}
                              onChange={this.setData}></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Revenue:
                        </td>
                        <td>
                            <input type="number" name='revenue' value={this.state.revenue}
                              onChange={this.setData}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            PhoneNumber:
                        </td>
                        <td>
                            <input type="number" name='phoneNumber' value={this.state.phoneNumber}
                              onChange={this.setData}></input>
                        </td>
                    </tr>

                    </tbody>
                </table>
                <button onClick={()=>this.setInfo(!this.state.formflag)} 
                    disabled={(organizationName.trim().length===0 || address.trim().length===0 || 
                        noOfEmployee.trim().length===0) ? true:false}>SUBMIT</button>
                </div> : 
                <div>
                <Header formflag={this.state.formflag} checkboxflag={this.state.checkboxflag} 
                    displayDeactivatedList={this.displayDeactivatedList} handleDeactivatedList={this.handleDeactivatedList}
                    changeformFlag={this.changeformFlag} checkedIndexList={this.state.checkedIndexList} filterData={this.filterData}/>   
                <div><td><input type="checkbox" onChange={this.handleCheckbox}></input></td><td>OrganizationName</td>
                <td>Address</td><td>PhoneNumber</td><td>Edit</td></div>
                {this.state.filter==='Deactive' ? 
                this.state.deactivedList.map((entry,i)=> 
                <div>
                <table><tbody>    
                   <tr>
                       <td><input type="checkbox" /*checked={this.state.checkboxflag}*/ onChange={()=>this.handlecheckedList(i)}></input></td>
                       <td>{entry[0]}</td>
                       <td>{entry[1]}</td>
                       <td>{entry[6]}</td>
                       <td><button onClick={()=>this.handleEdit(entry,i,!this.state.formflag)}>Edit</button></td>
                   </tr>
               </tbody></table>
            </div>) :
                organizationInfo.map((entry,i)=>
                 <div>
                     <table><tbody>    
                        <tr>
                            <td><input type="checkbox" /*checked={this.state.checkboxflag}*/ onChange={()=>this.handlecheckedList(i)}></input></td>
                            <td>{entry[0]}</td>
                            <td>{entry[1]}</td>
                            <td>{entry[6]}</td>
                            <td><button onClick={()=>this.handleEdit(entry,i,!this.state.formflag)}>Edit</button></td>
                        </tr>
                    </tbody></table>
                 </div> )}

            </div>                 
                
                
                
                }
            </div>
        );
    }

}

export default NewMainLayout;