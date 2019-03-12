import React,{Component} from 'react';
import colorChange from './hocDemo';

class Demo extends Component{
    render(){
        return(
            <div>
               <h1>{this.props.name}</h1>
               <h1>{this.props.msgg}</h1>
            </div>
        );
    }
}


//const Colorchange=colorChange()

export default colorChange(Demo);