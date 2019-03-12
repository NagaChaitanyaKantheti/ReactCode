import React,{Component} from 'react';

class ChildComponent extends Component{    
    componentWillReceiveProps(){
        console.log('will receive props')
    }

    handle=()=>{
        this.props.delete(this.props.list);
    }

    render(){
        return(
            <div>
                <p>{this.props.list}</p><span>
                    <button onClick={this.handle}>delete</button>
                </span>
            </div>
        );
    }
}

export default ChildComponent;