import React,{Component} from 'react';
import { connect } from 'react-redux';
import {addStage} from '../Action/ProjectMActionC';
import projectFormHoc from './ProjectFormHoc';
import {withRouter} from 'react-router';


class StageForm extends Component{
    constructor(){
        super();
        this.state={
            stageName:'',
            lastDate:'',
            noOfTasks:'',
        }
        this.handleInput=this.handleInput.bind(this);
        this.storeData=this.storeData.bind(this);
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.escFlag!==this.props.escFlag){
            let path='/Project/'+this.props.params.projectId+'/stageList'
            this.props.router.push(path)
        }

        if(nextProps.enterFlag!==this.props.enterFlag){
            if( this.state.stageName.trim().length>0){
                this.storeData();
               // this.props.history.goBack();
                let path='/Project/'+this.props.params.projectId+'/stageList'
                this.props.router.push(path)
            }
            else{
                alert('Please fill the StageName field')
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
        let {stageName,lastDate,noOfTasks}=this.state
        let object={"stageName":stageName,"tasks":[],"lastDate":lastDate,"noOfTasks":noOfTasks}
        this.props.dispatch(addStage(object,projectId));
        this.setState({
            stageName:'',
            lastDate:'',
            noOfTasks:'',
        })
    }

    render(){
        return(
            <div>
                <p><input type='text'placeholder="Enter Stage Name" name="stageName" value={this.state.stageName} onChange={this.handleInput}></input></p>
                <p><input type='date' name="lastDate" value={this.state.lastDate} onChange={this.handleInput} ></input></p>
                <p><input type='number' placeholder='Enter no of tasks' name="noOfTasks" value={this.state.noOfTasks} onChange={this.handleInput}></input></p>
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

export default withRouter(connect(mapStateToProps)(projectFormHoc(StageForm)));