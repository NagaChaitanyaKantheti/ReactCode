import React,{Component} from 'react';

const toDoHoc=(TodoList)=>{
    return class Flag extends Component{
        constructor(props){
            super(props);
            this.state={
                flag:false
            }
           this.handleKeyPress=this.handleKeyPress.bind(this);
           // this.changeFlag=this.changeFlag.bind(this);
        }

        handleKeyPress(event){
            if(event.keyCode===13){
                this.setState({
                    flag:!this.state.flag
                });
            }
        }

        componentDidMount(){
            document.addEventListener("keypress",this.handleKeyPress)
        }

        componentWillUnmount(){
            document.removeEventListener("keypress",this.handleKeyPress)
        }

        

        render(){
            const values={
                value:this.state.flag
            }
            return <TodoList {...this.props} {...values} />
        }
    }
}

export default toDoHoc;