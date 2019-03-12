import React,{Component} from 'react';
import { connect } from 'react-redux';
import {increment,decrement} from '../Action/ActionCreater';

class Counter extends Component{
    constructor(){
        super();
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }

    increment(){
        this.props.dispatch(increment())
    }

    decrement(){
       this.props.dispatch(decrement())
    }

    
    render(){
        return(
            <div>
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

export default connect(mapStateToProps)(Counter);