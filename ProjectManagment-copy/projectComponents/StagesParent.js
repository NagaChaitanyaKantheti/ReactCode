import React,{Component} from 'react';


class StagesParent extends Component{  
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}
export default StagesParent;