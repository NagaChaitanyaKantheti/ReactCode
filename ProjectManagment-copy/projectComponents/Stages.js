import React,{Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import PorjectFormHoc from './ProjectFormHoc';

class Stages extends Component{

    componentWillReceiveProps(nextProps){
        if(nextProps.escFlag!==this.props.escFlag){
            let path='/ProjectList'
            this.props.router.push(path)
        }
    }

    
    render(){
        const projectId=this.props.params.projectId
        let path1='/Project/'+projectId+'/stageAdd'
        return(
            <div>
                <p><Link to={path1}><button>AddStage</button></Link></p>
                <table><tbody><tr>
                    <td style={{ width: '100px' }}>SerialNo</td>
                    <td style={{ width: '100px' }}>StageName</td>
                    <td style={{ width: '100px' }}>LastDate</td>
                    <td style={{ width: '100px' }}>NoOfTasks</td>
                    <td style={{ width: '100px' }}>CreateTasks</td>
                </tr>
                    {this.props.projectList[projectId].stages.map((entry, i) =>{ let path='/Project/'+projectId+"/stageList/"+i+'/taskList'
                        return  <tr>
                        <td style={{ width: '100px' }}>{i + 1}</td>
                        <td style={{ width: '100px' }}>{entry.stageName}</td>
                        <td style={{ width: '100px' }}>{entry.lastDate}</td>
                        <td style={{ width: '100px' }}>{entry.noOfTasks}</td>
                        <td style={{ width: '100px' }}><Link to={path}><button>CreateTasks</button></Link></td>
                    </tr>})
                        }
                </tbody></table>

            </div>
        );
    }
}


/*



*/


function mapStateToProps(state){
    return{
        projectList:state.project.projectList 
    }
}

export default withRouter(connect(mapStateToProps)(PorjectFormHoc(Stages)));