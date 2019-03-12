import React,{Component} from 'react';


class Parent extends Component{
    constructor(){
        super();
        this.state={
            boolean:false,
            sname:'',
            cls:'',
            rno:''
        }
    }

    myCallback=(a,b,c)=>{
        this.setState({
            sname:a,
            cls:b,
            rno:c,
            boolean:!this.state.boolean
        });
       
    }

    render(){
        return(
            <div>
                {!this.state.boolean ? <ChildOne myf={this.myCallback}/> : <ChildTwo bool={this.state.boolean} name={this.state.sname} sclass={this.state.cls} rollno={this.state.rno}/>}
            </div>        
        );
    }

}


class ChildOne extends Component{
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
            this.props.myf(sname,cls,rno);
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
                            <td><button onClick={this.checkData} value={this.state.sname} 
                            disabled={this.state.sname.trim().length===0}>Submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class ChildTwo extends Component{
    render(){
       return(
            <div>
                <h1>Name  : {this.props.name}</h1>
                <h1>Class :{this.props.sclass}</h1>
                <h1>RollNo:{this.props.rollno}</h1>
            </div>
        );

        }
    }

export default Parent;