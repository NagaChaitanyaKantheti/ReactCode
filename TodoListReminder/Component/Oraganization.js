import React,{Component} from 'react';
import { connect } from 'react-redux';
import {changeFormFlag, addOrganization, editOrganization, fetchCountryList,fetchTimeZoneList, 
    activateOrganization, deactivateList,changeDisplayStatus,editInactiveOrganization,
    inactiveCheckedList,checkedList,addInactiveEditOrganization} from '../Action/OrganizationActionCreater';

class Organization extends Component{
    constructor(){
        super();
        this.state={
            timeZoneList:[],
            countryList:[],
            organizationName:'',
            address:'',
            timeZone:'',
            country:'',
            noOfEmployee:'',
            revenue:'',
            phoneNumber:'',
            isCountriesLoaded:false,
            isTimeZoneLoaded:false,
            readonlyflag:false,
            checkedList:[],
            inactiveCheckedList:[]
        }

        this.handleForm=this.handleForm.bind(this);
        this.setData=this.setData.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
        this.handleCheckbox=this.handleCheckbox.bind(this);
        this.handleDeactivate=this.handleDeactivate.bind(this);
        this.handleDisplayStaus=this.handleDisplayStaus.bind(this);
        this.handleInactiveEdit=this.handleInactiveEdit.bind(this);
        this.handleInactiveCheckbox=this.handleInactiveCheckbox.bind(this);
        this.handleActivate=this.handleActivate.bind(this);
    }

    

    handleDisplayStaus(event){
        if(this.props.displayListStaus!==event.target.value){
            this.props.dispatch(changeDisplayStatus(event.target.value))
        }
    }

    handleDeactivate(){
        let checkedList=this.props.checkedList
        checkedList.sort()
        checkedList.reverse()
        this.props.dispatch(deactivateList(checkedList))
    }

    handleActivate(){
        let inactiveCheckedList=this.props.inactiveCheckedList
        inactiveCheckedList.sort()
        inactiveCheckedList.reverse()
        this.props.dispatch(activateOrganization(inactiveCheckedList))
    }

    handleSubmit(){
        const{organizationName,address,timeZone,country,noOfEmployee,revenue,phoneNumber}=this.state
        if(organizationName.trim().length>0){
            if(address.trim().length>0 ){
                if( noOfEmployee.trim().length>0){
                    if(/^[a-zA-Z0-9]+$/.test(organizationName)){
                        if(phoneNumber.trim.length===0 || phoneNumber.trim().length===10 ){
                            let object={"organizationName":organizationName,"address":address,"timeZone":timeZone,
                            "country":country,"noOfEmployee":noOfEmployee,"revenue":revenue,"phoneNumber":phoneNumber}
                            if(this.props.inactiveEditFlag){
                                this.props.dispatch(addInactiveEditOrganization(object));
                            }
                            else{ this.props.dispatch(addOrganization(object)); }
                            this.setState({
                                organizationName:'',
                                address:'',
                                timeZone:'',
                                country:'',
                                noOfEmployee:'',
                                revenue:'',
                                phoneNumber:'',
                                readonlyflag:false
                            })
                        }
                        else alert('Invalid PhoneNumber')
                        
                    }
                    else alert('Organization Name should be alphanumeric')
                }
            }
        } 
        else{
            alert("Please fill required details")
        }
    }

    handleForm(){   
        this.props.dispatch(changeFormFlag())
    }

    setData(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    handleInactiveCheckbox(index){
        this.props.dispatch(inactiveCheckedList(index));
    }


    handleCheckbox(index){
        this.props.dispatch(checkedList(index));
    }


    handleInactiveEdit(index){
        const list=this.props.deactive_organization 
        this.setState({
            readonlyflag:true,
            organizationName:list[index].organizationName,
            address:list[index].address,
            timeZone:list[index].timeZone,
            country:list[index].country,
            noOfEmployee:list[index].noOfEmployee,
            revenue:list[index].revenue,
            phoneNumber:list[index].phoneNumber,
        })
        this.props.dispatch(editInactiveOrganization(index))
    }

    handleEdit(index){
        const list=this.props.active_organization 
        this.setState({
            readonlyflag:true,
            organizationName:list[index].organizationName,
            address:list[index].address,
            timeZone:list[index].timeZone,
            country:list[index].country,
            noOfEmployee:list[index].noOfEmployee,
            revenue:list[index].revenue,
            phoneNumber:list[index].phoneNumber,
        })
        this.props.dispatch(editOrganization(index))
    }


    componentDidMount(){
        fetch("http://172.26.102.81:8000/generic/time-zone/")
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.props.dispatch(fetchTimeZoneList(result))
                },
                (error)=>{
                    this.setState({
                        isTimeZoneLoaded:true,
                        error
                    });
                }
            )

            fetch("http://172.26.102.81:8000/generic/countries/")
            .then(res=>res.json())
            .then(
                (result)=>{
                    
                    this.props.dispatch(fetchCountryList(result.response))
                },
                (error)=>{
                    this.setState({
                        isCountriesLoaded:true,
                        error
                    });
                }
            )
            

    }

    render(){
        return(
            <div>
            {this.props.form_flag? <div><table>
                <tbody>
                <tr>
                    <td>
                       Organization NAME*:
                    </td>
                    <td>
                        <input type="text" name='organizationName' 
                        value={this.state.organizationName} disabled={this.state.readonlyflag}
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
                          {this.props.timeZoneList.map((entry,i)=>
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
                            {this.props.countryList.map((entry,i)=><option>{entry.name}</option>)}
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
            <button onClick={this.handleSubmit}>SUBMIT</button>
            </div> :
            <div>
                <div>{this.props.displayListStatus==='active'?<button onClick={this.handleForm}>Add</button> :null}
                <select onChange={this.handleDisplayStaus}>
                    <option value="active">Active</option>
                    <option value="deactive">Deactive</option>
                </select></div>

                <div>
                    <input type="checkbox"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>OrgName</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>Address</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>PhoneNo</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    
                </div> {this.props.displayListStatus==='active' ? 
                   <div> {this.props.checkedList.length>0? <button  onClick={this.handleDeactivate}>Deactivate</button>:null}
                    {this.props.active_organization.map((entry,i)=> 
                        <div><table><tr key={i+' '+entry.organizationName}>
                            <td><input type="checkbox" onChange={()=>this.handleCheckbox(i)}></input></td>&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>{entry.organizationName}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>{entry.address}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>{entry.phoneNumber}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><button onClick={()=>this.handleEdit(i)}>Edit</button></td>&nbsp;&nbsp;&nbsp;&nbsp;
                            </tr></table>
                        </div>)} </div>: 
                           <div> 
                            {this.props.inactiveCheckedList.length>0? <button  onClick={this.handleActivate}>Activate</button>:null}
                            {this.props.deactive_organization.map((entry,i)=> 
                            <div><table><tr key={i+' '+entry.organizationName}>
                            <td><input type="checkbox" onChange={()=>this.handleInactiveCheckbox(i)}></input></td>&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>{entry.organizationName}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                             <td>{entry.address}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>{entry.phoneNumber}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><button onClick={()=>this.handleInactiveEdit(i)}>Edit</button></td>&nbsp;&nbsp;&nbsp;&nbsp;
                            </tr></table>
                            </div>) }</div>
                        }   
            </div>
            }
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        active_organization:state.organization.active_organization,
        form_flag:state.organization.form_flag,
        countryList:state.organization.countryList,
        timeZoneList:state.organization.timeZoneList,
        buttonFlag:state.organization.buttonFlag,
        deactive_organization:state.organization.deactive_organization,
        displayListStatus:state.organization.displayListStatus,
        inactiveEditFlag:state.organization.inactiveEditFlag,
        inactiveCheckedList:state.organization.inactiveCheckedList,
        checkedList:state.organization.checkedList
    }
}
export default connect(mapStateToProps)(Organization);