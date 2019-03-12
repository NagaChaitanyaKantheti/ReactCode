import React,{Component} from 'react';


class TasksParent extends Component{  
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}
export default TasksParent;