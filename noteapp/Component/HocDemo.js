import React,{Component} from 'react';

function hocDemo(WrappedComponent){
    return class PP extends Component{
        render(){
            return <WrappedComponent colour={green}/>
        }
    } 
}





class WrappedComponent extends Component{
    render(){
        return(
            <div>
                <h1 style={{color:this.props.colour}}>Hello</h1>
            </div>
        );
    }
}

export default hocDemo(WrappedComponent);