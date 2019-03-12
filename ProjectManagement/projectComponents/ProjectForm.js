import React,{Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import {addProject} from '../Action/ProjectMActionC';
import projectFormHoc from './ProjectFormHoc';


class ProjectForm extends Component{
    constructor(){
        super();
        this.state={
            projectName:'',
            lastDate:'',
            noOfStages:'',
        }
        this.handleInput=this.handleInput.bind(this);
        this.storeData=this.storeData.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.escFlag!==this.props.escFlag){
            let path='/ProjectList'
            this.context.router.push(path)
            //this.props.router.push(path)
        }

        if(nextProps.enterFlag!==this.props.enterFlag){
            if(this.state.projectName.trim().length>0){
                this.storeData();
                let path='/ProjectList'
                this.props.router.push(path)
            }
            else{
                alert('Please fill the ProjectName field')
            }  
        }
    }

    handleInput(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    storeData(){
        let {projectName,lastDate,noOfStages}=this.state
        let object={"projectName":projectName,"stages":[],"lastDate":lastDate,"noOfStages":noOfStages}
        this.props.dispatch(addProject(object));
        this.setState({
            projectName:'',
            lastDate:'',
            noOfStages:'',
        })
    }

    render(){
        return(
            <div>
                <p><input type='text' placeholder='Enter project name' name="projectName" value={this.state.projectName} onChange={this.handleInput}></input></p>
                <p><input type='date' name="lastDate" value={this.state.lastDate} onChange={this.handleInput} ></input></p>
                <p><input type='number'placeholder='Enter no of stages' name="noOfStages" value={this.state.noOfStages} onChange={this.handleInput}></input></p>
            </div>
        );
    }

}

function mapStateToProps(state){
    return{
        projectList:state.project.projectList 
    }
}

export default withRouter(connect(mapStateToProps)(projectFormHoc(ProjectForm)));