import React,{Component} from 'react';
import './index.css'
class Calculator extends Component{
    constructor(){
        super();
        this.state={
            op:'',
            numbers:[...Array(10).keys()]
        }
    }

    render(){
        console.log(this.state.numbers)
        return(
            <div>
                <h2>Welcome to calculator app</h2>
                {this.state.numbers.map((i)=> <button>{i}</button>)}
            </div>
        );
    }

}

export default Calculator;