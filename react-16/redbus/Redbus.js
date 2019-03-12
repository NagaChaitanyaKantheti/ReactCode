import React,{Component} from 'react';
import Childone from './Childone';

class Redbus extends Component{
    constructor(props){
        super(props);
        this.state={
            seats:[1,2,3,4,5,6,7,8,9],
            index:'',
            enabled:true,
            uname:'',
            email:'',
            boolean:false
        }
    }


    setdata=(event)=>{
        const {uname,email}=this.state
        if(this.state.index){
            this.setState({
                [event.target.name]:event.target.value,    
            })
        }
        else return

        if(uname.trim().length>0&&email.trim().length>0){
            this.setState({
                enabled:!this.state.enabled
            })
        }
    }

    storedata=()=>{
        const {uname,email,boolean}=this.state
            this.setState({
                uname:uname,
                email:email,
                boolean:!boolean,
            }) 
    }

    seatIndex=(seatIndex)=>{
        this.setState({
            index:seatIndex
        })
    }

    removedata=()=>{
        this.setState({
            uname:'',
            email:'',
            boolean:false,
            enabled:true
        })
    }

    render(){
        return(
            <div className="container">
                {this.state.seats.map((list,i)=> 
                        <Childone key={i} entry={list} index={i} seatI={this.seatIndex} />
                )}
                <br/>
                <input type="text" placeholder="Name" name="uname" value={this.state.uname} onChange={this.setdata}></input><br/><br/>
                <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.setdata} ></input><br/><br/>
                <button type="text" onClick={this.storedata} disabled={this.state.enabled}>Submit</button>
                {this.state.boolean? 
                    <div className="detail">
                       <br/> <h5>Name  :{this.state.uname}</h5>
                        <h5>Email :{this.state.email}</h5>
                        <h5>SeatNo:{this.state.index}</h5>
                        <h5><button onClick={this.removedata}>Cancel</button></h5>
                    </div> : null
                }
            </div>
        );
    }
}

export default Redbus;





import React,{Component} from 'react';
import './Childone.css';

class Childone extends Component{
    constructor(){
        super();
        this.state={
            index:'',
            enabled:false,
            bgcolor:'rgba(43, 32, 107, 0.959)',
        }
    }
    

    seatIndex=(sindex,)=>{
        this.setState({
            index:sindex,
            bgcolor:'#6666ff',
            enabled:!this.state.enabled
        })
        this.props.seatI(this.props.entry);
    }



    render(){
        return(
            <div>
                <button style={{backgroundColor:this.state.bgcolor}} disabled={this.state.enabled} 
                    className="seats"  onClick={()=>this.seatIndex(this.props.index)}>{this.props.entry}</button>
            </div>
        );
    }
}

export default Childone;