import React,{Component} from 'react';
import ChildComponent from './ChildComponent';
class Lifecycle extends Component{
    constructor(){
        super();
        this.state={
            boolean:false,
            number:0,
            enteredData:'',
            data:[]
        }
        console.log('constructor')
    }

   

    change=()=>{
        this.setState({
            boolean:!this.state.boolean
        })
    }

    increment=()=>{
        this.setState({
            number:this.state.number+1
        })
    }

    decrement=()=>{
        this.setState({
            number:this.state.number-1
        })
    }

    update=(event)=>{
        this.setState({
            enteredData:event.target.value
        })
    }

    handleOnClick=()=>{
        let list=this.state.data;
        list.unshift(this.state.enteredData);
        this.setState({
            data:list
        })
    }


    delete=(entry)=>{
        const list=this.state.data.filter(i=> {return i!==entry});
        this.setState({
            data:list
        })
    }

    render(){        
        return(
            <div>
                <h1>Hello world</h1>
                <ChildComponent boolean={this.state.boolean}/>
                <button onClick={this.change}>submit</button><br/>
                <button onClick={this.increment}>Increment</button><br/>
                <h2>{this.state.number}</h2>
                <button onClick={this.decrement}>Decrement</button><br/>

                <input onChange={this.update} value={this.state.enteredData}></input><span>
                <button onClick={this.handleOnClick}>submit</button>
                </span>
                {this.state.data.map((list,i) => {return <li key={i}>{list}<span><button onClick={()=>this.delete(list)}>Delete</button></span></li>                    } )}
            </div>
        );
    }
}

export default Lifecycle;