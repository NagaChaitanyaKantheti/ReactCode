import React,{Component} from 'react';
import './Childone.css';

class Childone extends Component{
    constructor(){
        super();
        this.state={
            index:'',
            
        }
    }
    //enabled:!this.state.enabled
    //style={{backgroundColor:this.props.bgcolor}}

    seatIndex=(sindex)=>{
        this.setState({
            index:sindex,
           // bgcolor:'#6666ff',    
        })
        this.props.currentseat(this.props.entry);
    }



    render(){
        return(
            <div>
                <button  disabled={this.props.seatflag} 
                    className="seats" onClick={()=>this.seatIndex(this.props.entry)}>{this.props.entry}</button>
            </div>
        );
    }
}

export default Childone;