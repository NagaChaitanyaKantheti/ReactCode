import React,{Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import PorjectFormHoc from './ProjectFormHoc';

class Tasks extends Component{


    componentWillReceiveProps(nextProps){
        if(nextProps.escFlag!==this.props.escFlag){
            let path='/Project/'+this.props.params.projectId+'/stageList'
            this.props.router.push(path)
        }
    }

    render(){
        const projectId=this.props.params.projectId
        const stageId=this.props.params.stageId
        let path1='/Project/'+projectId+'/stageList/'+stageId+'/taskAdd'
        return(
            <div>
                <p><Link to={path1}><button>AddTask</button></Link></p>
                <table><tbody><tr>
                    <td style={{ width: '100px' }}>SerialNo</td>
                    <td style={{ width: '100px' }}>TaskName</td>
                    <td style={{ width: '100px' }}>LastDate</td>
                </tr>
                    {this.props.projectList[projectId].stages[stageId].tasks.map((entry, i) =>{let path='/TaskForm/'+i 
                         return  <tr>
                         <td style={{ width: '100px' }}>{i + 1}</td>
                         <td style={{ width: '100px' }}>{entry.taskName}</td>
                         <td style={{ width: '100px' }}>{entry.lastDate}</td>
                    </tr>})
                       }
                </tbody></table>

            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        projectList:state.project.projectList 
    }
}

export default withRouter(connect(mapStateToProps)(PorjectFormHoc(Tasks)));