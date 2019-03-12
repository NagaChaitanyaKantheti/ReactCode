import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:'',
      isLoggidIn: true,
   }

  };
  
 
  
  updateData=(event)=>{
    this.setState({
      data : event.target.value
    })
  }

  isLoggidIn=()=>{
    this.setState({
      isLoggidIn:!this.state.isLoggidIn,
    })
  }  

  showParent=()=>{
    alert('Parent');
  }

  render(){

    const data=[1,10,3,4,5];
    const list=[];
    for(let x in data){
      console.log('>>' ,x);
      list.push(<li>{x}</li>)
    }
    return(
      <div>
        <ShoppingList name='chaitu'/>
        <div>
          <input type='text' onChange={this.updateData}></input>
          <h2>{this.state.data}</h2>
        </div>
        {!this.state.isLoggidIn ? 
        <section>
          <h1>Please Login</h1>
          <button value="login" onClick={this.isLoggidIn}>Login</button>
        </section>

        : 
        
        <section>
          <h1>Welcome to portal</h1>
          <button value="logout" onClick={this.isLoggidIn}>Logout</button>
        </section>
        }
        <div>
        <ul>{list}</ul>
        </div>


        <div>
          <h1>Parent Component</h1>
          <button onClick={this.showParent}>Parent</button>
        </div>
        <SampleChild showParent={this.showParent}/>
      </div>
        
    );
  }
}


class SampleChild extends Component{

  showChild=()=>{
    alert('Child');
    this.props.showParent();
  }
  render(){
    return(
      <div>
          <h1>Child Component</h1>
          <button onClick={this.showChild}>Child</button>
      </div>

    );
  }
}


class ShoppingList extends Component{
  showAlert=()=>{
    alert(this.props.name);
  }
  render(){
    return(
      <div>
        <h1>shopping list for {this.props.name}</h1>
        <button onClick={this.showAlert}>Click Me</button>
      </div>
    );
  }
}


export default App;