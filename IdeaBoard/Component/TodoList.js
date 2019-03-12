import React,{Component} from 'react';
import { connect } from 'react-redux';
import { add_todo, delete_todo, completed,filter,edit_priority} from '../Action/TodoListActionCreaters';

class TodoList extends Component{
    constructor(){
        super();
        this.state={
            task:'',
            priority:'',
            index:'',
        }

        this.setData=this.setData.bind(this);
        this.pushData=this.pushData.bind(this);
        this.handleComplete=this.handleComplete.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleFilter=this.handleFilter.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
        this.handleEditChange=this.handleEditChange.bind(this);
        //this.combineFunction=this.combineFunction.bind(this);
    }

    setData(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    pushData(){
       let {task,priority}=this.state
       let object={"task":task,"priority":priority}
        this.props.dispatch(add_todo(object));
        this.setState({
            task:'',
            priority:'',
        })
    }

    handleEdit(index){
        this.setState({
            index:index,
        })
    }

   handleEditChange(event){
        this.props.dispatch(edit_priority(this.state.index,event.target.value))
        //console.log("hi"+this.state.index)
   }

    handleComplete(index){
       this.props.dispatch(completed(index))
    }


    handleDelete(index){
        this.props.dispatch(delete_todo(index))
    }



    handleFilter(event){
        this.props.dispatch(filter(event.target.value))
    }

    

    render(){
        
        return(
            <div>
                <input type="text" placeholder="Enter task" value={this.state.task} name='task' onChange={this.setData}></input>
                <select type="text" name="priority" onChange={this.setData} value={this.state.priority}>
                    <option>Select</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <button onClick={this.pushData}>Add</button>
                <select type="text"  onChange={this.handleFilter}>
                    <option>Select</option>
                    <option value='todolist'>TodoList</option>
                    <option value='completed'>Completed Tasks</option>
                </select>


                {this.props.completedFlag==='completed' ?
                    this.props.completedList.map((entry,i)=>
                        <p>
                            {entry.task}&nbsp;&nbsp;&nbsp;
                            {entry.priority}&nbsp;&nbsp;&nbsp;
                        </p>     
                        )    
                    :                        
                    this.props.todoList.map((entry,i)=>
                        <p>
                            {entry.task}&nbsp;&nbsp;&nbsp;
                            {entry.priority}&nbsp;&nbsp;&nbsp;
                            <select type="text" name="edit_index" defaultValue={entry.priority}
                                 onChange={this.handleEditChange} onClick= {()=>this.handleEdit(i)}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>this.handleComplete(i)}>Completed</button>&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>this.handleDelete(i)}>Delete</button>
                        </p>     
                    )      
                }
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log(state)
    return{
        todoList:state.data.todoList,
        completedList:state.data.completedList,
        completedFlag:state.data.completedFlag
        
    }
}

export default connect(mapStateToProps)(TodoList)