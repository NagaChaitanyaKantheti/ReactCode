import React,{Component} from 'react';

class Redbus extends Component{
    constructor(){
        super();
        this.state={
            seats:[1,2,3,4,5,6,7,8,9],
        }
    }
    render(){
        return(
            <div>
                {this.state.seats.map((i)=>{return <button key={i} onClick></button>})}
            </div>
        );
    }
}

export default Redbus;