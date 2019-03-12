import React,{Component} from 'react';
import { connect } from 'react-redux';
import {addTask} from '../Action/ProjectMActionC';
import projectFormHoc from './ProjectFormHoc';
import {withRouter} from 'react-router';


class TaskForm extends Component{
    constructor(){
        super();
        this.state={
            taskName:'',
            lastDate:'',
        }
        this.handleInput=this.handleInput.bind(this);
        this.storeData=this.storeData.bind(this);
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.escFlag!==this.props.escFlag){
            let path='/Project/'+this.props.params.projectId+'/stageList/'+this.props.params.stageId+'/taskList'
            this.props.router.push(path)
        }

        if(nextProps.enterFlag!==this.props.enterFlag){
            if(this.state.taskName.trim().length>0){
                this.storeData();
               //this.props.history.goBack();
               let path='/Project/'+this.props.params.projectId+'/stageList/'+this.props.params.stageId+'/taskList'
               this.props.router.push(path)
            }
            else{
                alert('Please fill the taskName field')
            }  
        }
    }


    handleInput(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    storeData(){
        const projectId=this.props.params.projectId
        const stageId=this.props.params.stageId
        let {taskName,lastDate}=this.state
        let object={"taskName":taskName,"lastDate":lastDate}
        this.props.dispatch(addTask(object,projectId,stageId));
        this.setState({
            taskName:'',
            lastDate:''
        })
    }

    render(){
        return(
            <div>
                <p><input type='text'placeholder="Enter Task Name" name="taskName" value={this.state.taskName} onChange={this.handleInput}></input></p>
                <p><input type='date' name="lastDate" value={this.state.lastDate} onChange={this.handleInput} ></input></p>
            </div>
        );
    }

}

function mapStateToProps(state){
    console.log(state.project.projectList)
    return{
        projectList:state.project.projectList 
    }
}

export default withRouter(connect(mapStateToProps)(projectFormHoc(TaskForm)));