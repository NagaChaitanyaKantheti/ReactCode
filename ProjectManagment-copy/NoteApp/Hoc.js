import React,{Component} from 'react';

const hoc=(Title)=>{
    return class Flag extends Component{
        constructor(props){
            super(props);
            this.state={
                enterFlag:false,
                escFlag:false
            }
           this.handleKeyPress=this.handleKeyPress.bind(this);
        }

        handleKeyPress(event){
           // console.log("key>>"+event.keyCode)
            if(event.keyCode===96){
                this.setState({
                    escFlag:!this.state.escFlag
                });
            }
            if(event.keyCode===13){ 
                this.setState({
                    enterFlag:!this.state.enterFlag
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
                enterFlag:this.state.enterFlag,
                escFlag:this.state.escFlag
            }
            return <Title {...this.props} {...values} />
        }
    }
}

export default hoc;