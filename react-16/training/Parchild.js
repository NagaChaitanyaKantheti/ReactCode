import React from 'react';
class Parchild extends React.Component{
    constructor(){
            super();
            this.state={
                boolean:false,
                sname : '',
                subject:'',
                rollnum:''
            
            }
    }
    myCallback=(sname,subject,rollnum)=>{
        this.setState({
            sname:sname,
            subject:subject,
            rollnum:rollnum,
            boolean:!this.boolean
        });
       console.log(sname);
    }
    render(){
        return(
            <div>
                {!this.state.boolean ? <Childone myf={this.myCallback}/>:<Childtwo nam={this.state.sname} 
                sub={this.state.subject} rno={this.state.rollnum}/>}
            </div>
        );
    }
}
class Childone extends React.Component {
    constructor(props)
    {
      super(props);
      this.state={
        sname : " ",
        subject:" ",
        rollnum:" "
     };
    }
    changeData=(event)=>{
      this.setState({[event.target.name]:event.target.value});
   }
   addData=()=>{
     const{sname,subject,rollnum} = this.state;
     if(sname.trim().length>0){
       const data={
         sname:sname,
         subject:subject,
         rollnum:rollnum
       }
       console.log(data);
       this.props.myf(sname,subject,rollnum);
       console.log(sname);
     }
     else
       alert("Please fill student name");
   }
 
    render() {
       return (
          <div>
           <center>
           <table><tbody>
             <tr>
               <td>SNAME</td>
               <td><input type="text" name="sname" value={this.state.sname} onChange={this.changeData}></input></td>
             </tr>
             <tr>
               <td>SUBJECT</td>
               <td><input type="text" name="subject" value={this.state.subject} onChange={this.changeData}></input></td>
             </tr>
             <tr>
               <td>ROLL-NUM</td>
               <td><input type="text" name="rollnum" value={this.state.rollnum} onChange={this.changeData}></input></td>
             </tr>
             <tr>
                 <td><center><button onClick={this.addData}>SUBMIT</button></center></td>
             </tr></tbody>
           </table>
           </center>
          </div>
       );
    }
 }
 class Childtwo extends React.Component{
     render(){
         return(
            <div>
             <h1>{this.props.nam}</h1> 
             <h1>{this.props.sub}</h1> 
             <h1>{this.props.rno}</h1> 
            </div> 
         );
     }
    
    }  
export default Parchild;