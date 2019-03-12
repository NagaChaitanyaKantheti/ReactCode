import React,{Component} from 'react';
import Childone from './Childone';

class Temp extends Component{
    constructor(props){
        super(props);
        this.state={
            numbers:[0,1,2,3,4,5,6,7,8,9],
            seats:[false,false,false,false,false,false,false,false,false,false],
            //bgcolor:'rgba(43, 32, 107, 0.959)',
            bookingInfo:[],
            currentSeat:[],
            index:'',
            uname:'',
            email:'',
            flag:false
        }
    }

    setdata=(event)=>{        
        this.setState({
            [event.target.name]:event.target.value,    
        })
    }


    storedata=()=>{
        let{flag,bookingInfo,seats,currentSeat}=this.state
        const{uname,email,index}=this.state

        currentSeat[index]=index
        seats[index]=!flag
        bookingInfo.push([uname,email,index])
        this.setState({
            bookingInfo:bookingInfo,
            seats:seats,
            currentSeat:currentSeat
        });
    }
   
    currentseat=(seat)=>{
        this.setState({
            index:seat,
        })
    }

    removedata=(seat)=>{
        let {bookingInfo,currentSeat,seats,bgcolor}=this.state
        bookingInfo[seat]=[]
        currentSeat[seat]=[]
        seats[seat]=false
        if(seats[seat]===false){
           
        
        this.setState({
            bgcolor:bgcolor,
            uname:'',
            email:'',
            bookingInfo:bookingInfo,
            currentSeat:currentSeat,
            seats:seats
        })}
    }


    render(){
        console.log(this.state.bookingInfo);
        return(
            <div className="container">
                {this.state.numbers.map((entry,i)=> 
                        <Childone key={i}  entry={entry} bgcolor={this.state.bgcolor} seatflag={this.state.seats[i]} currentseat={this.currentseat} />
                )}
                <br/>
                <input type="text" placeholder="Name" name="uname" value={this.state.uname} onChange={this.setdata}></input><br/><br/>
                <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.setdata} ></input><br/><br/>
                <button onClick={this.storedata} disabled={(this.state.uname.trim().length===0 || this.state.email.trim().length===0)?true:false}>Submit</button>
                 {this.state.seats?
                    <div className="detail">
                       <h5>{this.state.bookingInfo.map((entry,i)=> 
                            {return <div>
                                <p>Name  :{entry[0]}</p>
                                <p>Mail  :{entry[1]}</p>
                                <p>Seatno:{entry[2]}</p>
                                <button onClick={()=>this.removedata(entry[2])}>Cancel</button>
                                </div>})}</h5>
                        
                    </div>:null
                 }          
            </div>
        );
    }
}

export default Temp;