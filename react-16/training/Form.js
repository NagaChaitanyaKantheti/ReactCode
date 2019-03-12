import React,{Component} from 'react';
class Form extends Component{
    constructor(props){
        super();
        this.state={
            name:'',
            id:'',
            gender:'',
        }
    }
    changeText=(e)=>{
        this.setState(
          { [e.target.name] : e.target.value}
        
        );
    }
       displayData=(e)=>{
           const {name,id,gender}=this.state
           if(name.trim().length>0)
           {
               const data={
                   name:name,
                   id:id,
                   gender:gender
               }
               console.log(data);
           }
           else
           alert("pls enter name");
       }

    
    render()
    {
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            NAME:
                        </td>
                        <td>
                            <input type="text" name='name' value={this.state.name} 
                            onChange={this.changeText}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            ID:
                        </td>
                        <td>
                            <input type="text" name='id' value={this.state.id}
                             onChange={this.changeText} ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            GENDER:
                        </td>
                        <td>
                            <input type="text" name='gender' value={this.state.gender}
                              onChange={this.changeText}></input>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={this.displayData}>SUBMIT</button>
            </div>
        );
    }
}
export default Form