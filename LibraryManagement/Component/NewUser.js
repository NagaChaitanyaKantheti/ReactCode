import React,{Component} from 'react';
import {withRouter} from 'react-router';
import { createAccount } from '../Action/LibraryActions';
import {connect} from 'react-redux';

class NewUser extends Component{
    constructor(){
        super();
        this.state={
            uname:'',
            password:'',
            confirmpwd:'',
            phno:'',
            quest:''
        }
        this.handleCreateAccount=this.handleCreateAccount.bind(this);
        this.setData=this.setData.bind(this)
    }

    handleCreateAccount(){
        let {uname,password,phno,quest,confirmpwd}=this.state
        let object={uname:uname,password:password,phno:phno,quest:quest}
        if(uname.trim().length>0){
            if(password===confirmpwd){
                this.props.dispatch(createAccount(object))
                alert('Created Successfully')
                let path='/'
                this.props.router.push(path)
            }
            else{
                alert('Password is not matching with the confirm password')
            }
        }
        else{
            alert('Please fill UserName')
        }
        
        
    }

    setData(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>SignUp</h3>
                <table><tbody>
                    <tr>
                        <td>UserName</td>
                        <td><input type='text' name='uname' value={this.state.value} onChange={this.setData}></input></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type='password' name='password' value={this.state.password} onChange={this.setData}></input></td>
                    </tr>
                    <tr>
                        <td>ConfirmPwd</td>
                        <td><input type='password' name='confirmpwd' value={this.state.confirmpwd} onChange={this.setData}></input></td>
                    </tr>

                    <tr>
                        <td>PhoneNumber</td>
                        <td><input type='text' name='phno' value={this.state.phno} onChange={this.setData}></input></td>
                    </tr>
                    <tr>
                        <td>Security Question</td>
                        <td><input type='text' name='quest' value={this.state.quest} onChange={this.setData}></input></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                        <button onClick={this.handleCreateAccount}>CreateAccount</button></td>
                    </tr>

                </tbody></table>
            </div>
        );
    }
}

export default withRouter(connect(null)(NewUser))