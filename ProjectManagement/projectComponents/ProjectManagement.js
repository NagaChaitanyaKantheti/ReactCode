import React,{Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import ProjectFormHOC from './ProjectFormHoc';

class ProjectManagement extends Component{
    componentWillReceiveProps(nextProps){
        if(nextProps.escFlag!==this.props.escFlag){
            let path='/'
            this.props.router.push(path)
        }
    }
    render(){
        console.log("render "+this.props.projectList)
        return(
            <div>
                <p><Link to='/ProjectAdd'><button>AddProject</button></Link></p>
                <table><tbody><tr>
                        <td style={{width:'100px'}}>SerialNo</td>
                        <td style={{width:'100px'}}>ProjectName</td>
                        <td style={{width:'100px'}}>LastDate</td>
                        <td style={{width:'100px'}}>NoOfStages</td>
                        <td style={{width:'100px'}}>CreateStages</td>
                        </tr>
                {this.props.projectList.map((entry,i)=> { let path='/Project/'+i+'/stageList'
                    return <tr key={i}>
                        <td style={{width:'100px'}}>{i+1}</td>
                        <td style={{width:'100px'}}>{entry.projectName}</td>
                        <td style={{width:'100px'}}>{entry.lastDate}</td>
                        <td style={{width:'100px'}}>{entry.noOfStages}</td>
                        <td style={{width:'100px'}}><Link to={path}><button>CreateStages</button></Link></td>
                    </tr>
                })}
                </tbody></table>
            </div>
        );
    }
}


function mapStateToProps(state){
    console.log("store "+state.project.projectList)
    return{
        projectList:state.project.projectList 
    }
}

export default withRouter(connect(mapStateToProps)(ProjectFormHOC(ProjectManagement)));