import React,{Component} from 'react';


class Organization extends Component{  
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}
export default Organization;