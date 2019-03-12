import React,{Component} from 'react';


class DisplayLayout extends Component{
    constructor(){
        super();
        this.state={
            flag:false,
            show:false
        }
    }
    
    

    changeFlag=(flag,editFlag,show)=>{
        this.setState({
            flag:flag,
            show:show
        })
        this.props.handleEdit(flag,editFlag,show)
    }

    render(){
        return(
            <div>
                
            </div>
        );
    }
}

export default DisplayLayout;