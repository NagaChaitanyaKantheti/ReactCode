import React,{Component} from 'react';
import { connect } from 'react-redux';
import {increment,decrement} from '../Actions/DemoActions';
import Background from '../logo.svg';

class Demo extends Component{

    increment=()=>{
        this.props.dispatch(increment())
    }

    decrement=()=>{
       this.props.dispatch(decrement())
    }

    
    render(){
        return(
            <div style={{backgroundImage:"url(" + { Background } + ")"}}>
                <button onClick={this.increment}>INCREMENT</button><br/>
                <h5>{this.props.count}</h5>
                <button onClick={this.decrement}>DECREMENT</button><br/>
            </div>
        );
    }
}
    
    function mapStateToProps(state){
        return{
            count:state.count
        }
    }

export default connect(mapStateToProps)(Demo);