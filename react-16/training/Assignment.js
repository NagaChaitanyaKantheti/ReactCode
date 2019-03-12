import React,{Component} from 'react';

class Assignment extends Component{

    constructor(){
        super();
        this.state={
            sname:'',
            cls:'',
            rno:'',
        }
    }

    storeData=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    }


    checkData=()=>{
        const{sname,cls,rno}=this.state;
        if(sname.trim().length > 0){
            const data={
                sname:sname,
                cls:cls,
                rno:rno
            }
            console.log(data);
        }
        else{
            alert('Please fill required feild');
        }
    }



    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" name='sname' value={this.state.sname} onChange={this.storeData}/></td>
                        </tr>

                         <tr>
                            <td>Class:</td>
                            <td><input type="text" name='cls' value={this.state.cls} onChange={this.storeData}/></td>
                        </tr>

                         <tr>
                            <td>RollNo:</td>
                            <td><input type="text" name='rno' value={this.state.rno} onChange={this.storeData}/></td>
                        </tr>

                         <tr>
                            <td><button onClick={this.checkData} value={this.state.sname}>Submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Assignment;