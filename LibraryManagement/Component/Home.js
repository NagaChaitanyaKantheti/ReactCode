import React,{Component} from 'react';
import {Link,withRouter} from 'react-router';
import {connect} from 'react-redux';
import { user } from '../Action/LibraryActions';


class Home extends Component{
    constructor(){
        super()
        this.state={
            uname:'',
            password:''
        }
        this.handleSignIn=this.handleSignIn.bind(this)
        this.setData=this.setData.bind(this)
    }

    handleSignIn(){
        let usersList=this.props.usersList
        let {uname,password}=this.state
        if(uname.trim().length>0 && password.trim().length>0){
            for(let i=0;i<usersList.length;i++){
                if(usersList[i].uname===uname && usersList[i].password===password){
                    alert('SignIn was successful')
                    this.props.dispatch(user(uname))
                    this.props.router.push('/Library')
                }
                else{
                    alert('Wrong UserName or Password')
                }
            }
        }
        else{
            alert('Pleae fill the details')
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
                <h3>WelcomeToLibrary</h3>
                <table><tbody>
                    <tr>
                        <td>UserName</td>
                        <td><input type='text' name='uname' value={this.state.uname} onChange={this.setData}></input></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type='password' name='password' value={this.state.password} onChange={this.setData}></input></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><Link to='/NewUser'><button>NewUser?</button></Link>&nbsp;&nbsp;&nbsp;<span>
                        <button onClick={this.handleSignIn}>SignIn</button></span></td>
                    </tr>

                </tbody></table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        usersList:state.data.usersList
    }
}

export default withRouter(connect(mapStateToProps)(Home))