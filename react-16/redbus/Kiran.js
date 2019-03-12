import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor()
  {
    super();
    this.state=
    {
      text:"",
      list :[],
      name:'',
      email:'',
      users :[],
     reslist:[false,false,false,false,false,false,false,false,false,false],
     selected:''
    }
    //this.state.list.fill(5,0,5);
  }
  changeAll=(event)=>
  {
    this.setState(
      {
        [event.target.name]:event.target.value
      }
    );
  }
  buttonSelected=(a)=>
  { 
    
      
      const rl=this.state.reslist;
      rl[a]=true;
      this.setState({
        selected:a,
        reslist:rl
      });
      console.log("Selected seats ",this.state.selected);
      console.log("Res list",this.state.reslist);
  }
  submitDetails=()=>
  {
    let tot=[this.state.name,this.state.email,this.state.selected];
    let total=this.state.users;
    if(this.state.selected==="")
    {
        alert("Please select seat")
    }
    else
    {
    total.push(tot);
    console.log("In submit tot ",total);
    let empty=[];
    this.setState({
          users:total,
          selected:empty,
          name:'',
          email:'',
      }
      );
      console.log("In submit ",this.state.users);
    }
  }
  deleteFromList=(index,b_index)=>
  {
      console.log("Index ",index);
      console.log("B index",b_index);
      console.log("Temp res list ",this.state.users);

        let dup_reslist=this.state.reslist;
        let dup_users=this.state.users;
        dup_users.splice(b_index,1);
      dup_reslist[index]=false;
      this.setState({
          reslist:dup_reslist,
          users:dup_users,
    });
  }

  render() {
      // let reslist=[false,false,false,false,false];
      // for(let x=0; x<10;x++)
      // {
      //     reslist.push(false);
          // console.log("render ",this.state.reslist);
      // }

   /* for(let x=0; x<5 ;x++)
    {     console.log("render ",this.state.reslist[x]);
          this.state.list.push(<button style={this.state.reslist[x]===false? {backgroundColor:'blue'}:{backgroundColor:'pink'}} className="ButtonMargin"  onClick={()=>this.buttonSelected(x)}>{x}</button>);
    }
  */
    
        const data_print=this.state.users.map((value,index)=>
        {
          return <p> <span className="ElementMargin">{value[0]}</span>
          {console.log("getting",value[0])}
          <span className="ElementMargin">{value[1]}</span>
          <span className="ElementMargin">{value[2]}</span> 
          <span className="ElementMargin">
          <button onClick={()=>this.deleteFromList(value[2],index)}>DELETE</button>
          </span>
          
          </p>;
        }
      )

    return (
      <div className="App">     
          {
            this.state.reslist.map((value,index)=>{
            return <button key={index}
            // style={value===false? {backgroundColor:'none'}:{backgroundColor:'pink'}}
              
              disabled={value===true?true:false}
             className="ButtonMargin"  
             onClick={()=>this.buttonSelected(index)}>{index}
             </button>
          })
          }
           {console.log("render ",this.state.reslist)}
           {/* {console.log("list of users render ",this.state.users)} */}
          <br/>
          <br/>
          <div>
            <input type="text" placeholder="Enter Name" onChange={this.changeAll} value={this.state.name} name="name"/>
            <br/>
            <br/>
            <input type="text" placeholder="Enter Email" onChange={this.changeAll} value={this.state.email} name="email"/>
            <br/>
            <br/>
            <button onClick={this.submitDetails} disabled={(this.state.name.length===0 || this.state.email.length===0)?true:false}> SUBMIT</button>
            <br/>
            <br/>
              <span className="ElementMargin">NAME</span> 
              <span className="ElementMargin">EMAIL</span> 
              <span className="ElementMargin">SEATS</span> 
              {data_print}
          </div>
      </div>
    );
  }
}
export default App;
