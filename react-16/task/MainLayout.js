import React,{Component} from 'react';
import Header from './Header';

class MainLayout extends Component{
    constructor(){
        super();
        this.state={
            organizationInfo:[],
            timeZoneList:[],
            countryList:[],
            entry:[],
            editFlag:false,
            pushflag:false,
            organizationName:'',
            address:'',
            timeZone:'',
            country:'',
            noOfEmployee:'',
            revenue:'',
            phoneNumber:'',
            isTimeZoneLoaded:false,
            isCountriesLoaded:false,
            show:false,
            index:''
            
        }
    }


    componentDidMount(){
        fetch("http://172.26.102.204:8000/generic/time-zone/")
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({
                        isTimeZoneLoaded:true,
                        timeZoneList:result
                    });
                },
                (error)=>{
                    this.setState({
                        isTimeZoneLoaded:true,
                        error
                    });
                }
            )

            fetch("http://172.26.102.204:8000/generic/countries/")
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({
                        isCountriesLoaded:true,
                        countryList:result.response
                    });
                },
                (error)=>{
                    this.setState({
                        isCountriesLoaded:true,
                        error
                    });
                }
            )

    }

    setData=(event)=>{
        //const organizationInfo=this.state.organizationInfo
             this.setState({
                [event.target.name]:event.target.value,
            })    
    }

    changeFlag=(flag)=>{
        this.setState({
            flag:flag
        })
    }

    setInfo=(flag)=>{
        const {editFlag,index}=this.state
        let organizationInfo=this.state.organizationInfo
        const{organizationName,address,timeZone,country,noOfEmployee,revenue,phoneNumber}=this.state
        if(this.state.pushflag){
            organizationInfo[index].push([organizationName,address,timeZone,country,noOfEmployee,revenue,phoneNumber])
            this.setState({
                organizationInfo:organizationInfo,
                show:!this.state.show,
                flag:flag,
                editFlag:!editFlag,
                pushflag:!this.state.pushflag
            })
        }
        else{
            organizationInfo.push([organizationName,address,timeZone,country,noOfEmployee,revenue,phoneNumber])
            this.setState({
                organizationInfo:organizationInfo,
                show:!this.state.show,
                flag:flag
            })
        }
       
    }

    handleEdit=(flag,editFlag,show,entry,index,pushflag)=>{
        this.setState({
            flag:flag,
            editFlag:editFlag,
            show:show,
            entry:entry,
            index:index,
            organizationName:entry[0],
            address:entry[1],
            timeZone:entry[2],
            country:entry[3],
            noOfEmployee:entry[4],
            revenue:entry[5],
            phoneNumber:entry[6],
            pushflag:pushflag
        })
    }
    
    render(){
        const organizationInfo=this.state.organizationInfo
        const {organizationName,address,noOfEmployee}=this.state
        return(
            <div>
                {this.state.flag? 
                
                
                <div><table>
                    <tbody>
                    <tr>
                        <td>
                           Organization NAME*:
                        </td>
                        <td>
                            <input type="text" pattern="[a-z][A-Z]" name='organizationName' value={this.state.organizationName} 
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
                              {this.state.timeZoneList.map((entry,i)=><option>{entry.name+entry.code}</option>)}
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
                <button onClick={()=>this.setInfo(this.props.flag)} disabled={(organizationName.trim().length===0 || address.trim().length===0 || noOfEmployee.trim().length===0) ? true:false}>SUBMIT</button>
                </div>
                
                
                
                :
                <div><Header flag={this.state.flag} show={this.state.show} changeFlag={this.changeFlag}/>                    
                        <div><td><input type="checkbox"></input></td><td>OrganizationName</td><td>Address</td><td>PhoneNumber</td><td>Edit</td></div>
                        {organizationInfo.map((entry,i)=>
                         <div>
                             <table><tbody>    
                                <tr>
                                    <td><input type="checkbox"></input></td>
                                    <td>{entry[0]}</td>
                                    <td>{entry[1]}</td>
                                    <td>{entry[6]}</td>
                                    <td><button onClick={()=>this.handleEdit(!this.state.flag,!this.state.editFlag,!this.state.show,entry,i,!this.state.pushflag)} >Edit</button></td>
                                </tr>
                            </tbody></table>
                         </div> )}

                    </div>
                }
                
            </div>
        );
    }
}

export default MainLayout;