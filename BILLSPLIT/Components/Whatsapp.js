import React,{Component} from 'react';
import './Whatsapp.css';
import hoc from './hoc';
import './Loader';
//import $ from 'jquery';

class Whatsapp extends Component{
    constructor(){
        super();
        this.state={
            user1Msg:'',
            user1Data:[],
            user2Msg:'',
            user2Data:[],
            flag:false,
            deletingIndex:null,
            editFlag:false,
            editIndex:null,
            userDistinguishFlag:false,
        }
    }

    // scrollToBottom = () => {
    //     this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    // }

    // componentDidMount() {
    //     $(".user1Area").animate({ scrollTop: $(document).height() }, "slow");
    //     this.scrollToBottom();
    // }

    // componentDidUpdate() {
    //     $(".user1Area").animate({ scrollTop: $(document).height() }, "slow");
    //     this.scrollToBottom();
    // }

    handleInput=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleOut=()=>{
        this.setState({
            deletingIndex:null,
            flag:false
        })
    }

    handleFocus=(i)=>{
        this.setState({
            deletingIndex:i,
            flag:true
        })
    }

    handleDelete=(i)=>{
        let {user1Data,user2Data}=this.state
        user1Data[i].delete=true
        user2Data[i].delete=true
        this.setState({
            user1Data:user1Data,
            user2Data:user2Data
        })
    }


    handleUser1Edit=(i)=>{
        let {user1Data}=this.state
        this.setState({
            editFlag:true,
            editIndex:i,
            user1Msg:user1Data[i].msg
        })
    }

    handleUser2Edit=(i)=>{
        let {user2Data}=this.state
        this.setState({
            editFlag:true,
            editIndex:i,
            userDistinguishFlag:true,
            user2Msg:user2Data[i].msg
        })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.enterFlag!==this.props.enterFlag){
            this.storeData();
        }
    }

    storeData=()=>{
        let {user1Msg,user1Data,user2Msg,user2Data,editIndex,editFlag,userDistinguishFlag}=this.state;
        let date=new Date()
        let user1img="data:image/png;base64,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"
        let user2img="http://anashussainfitnessacademy.com/img/client4.png" 
        let time=date.getHours()+':'+date.getMinutes();
        if(editFlag){
            if(userDistinguishFlag){
                user1Data[editIndex].msg = user2Msg
                user2Data[editIndex].msg = user2Msg
                this.setState({
                    user1Data: user1Data,
                    user2Data: user2Data,
                    user2Msg: '',
                    userDistinguishFlag:false,
                    editFlag: false,
                })
            }
            else{
                user1Data[editIndex].msg=user1Msg
                user2Data[editIndex].msg=user1Msg
                this.setState({
                    user1Data:user1Data,
                    user2Data:user2Data,
                    user1Msg:'',
                    editFlag:false,
                }) 
            }    
        }
        else{
            if(user1Msg){
                let object={msg:user1Msg,flag:false,time:time,img:user1img,delete:false}
                user1Data.push(object)
                let object2={msg:user1Msg,flag:true,time:time,img:user1img,delete:false}
                user2Data.push(object2)
                this.setState({
                    user1Msg:'',
                    user1Data:user1Data,
                    user2Data:user2Data
                })
            }
    
            else if(user2Msg){
                let object={msg:user2Msg,flag:false,time:time,img:user2img,delete:false}
                user2Data.push(object)
                let object2={msg:user2Msg,flag:true,time:time,img:user2img,delete:false}
                user1Data.push(object2)
                this.setState({
                    user2Msg:'',
                    user2Data:user2Data,
                    user1Data:user1Data
                })
            }
            else{
                alert('Enter message to send')
            }
        }
    }

    render(){
        let {user1Data,user2Data}=this.state
        return(
            <div className='main'>
                <h2>Welcome to chatApplication</h2>
                <div className="user1">
                <div className='messageArea'>
                    <div>{user1Data.map((val,i)=>{ if(val.flag){
                            if(val.delete){
                                return <h5 style={{color:'black'}}>This message was deleted<sub>{val.time}</sub></h5>
                            }
                            else{
                                return <h5 style={{textAlign:'left',color:'blue'}} key={val.msg+i}><img src={val.img} 
                                    style={{width:'30px',height:'30px'}}/>{val.msg}<sub style={{color:'black'}}>
                                        {val.time}</sub></h5>
                            }   
                        }
                        else{
                            if(val.delete){
                                return <h5 style={{color:'black',textAlign:'right'}}>You deleted this message<sub>
                                    {val.time}</sub></h5>
                            }
                            else{
                                return <h5 style={{textAlign:'right',color:'green'}} onMouseLeave={this.handleOut} 
                                    onMouseEnter={()=>this.handleFocus(i)} key={val.msg+i}><img src={val.img} 
                                    style={{width:'30px',height:'30px'}}/>{val.msg}<sub style={{color:'black'}}>
                                    {val.time}</sub>{this.state.flag && this.state.deletingIndex===i ? <div >
                                        <button onClick={()=>this.handleUser1Edit(i)}>Edit</button><span>
                                        <button onClick={()=>this.handleDelete(i)}>Delete</button> </span></div>:null}</h5>
                            }
                           
                        } 
                        })}</div>
                    </div>
                    <input placeholder='Enter Message' name='user1Msg' onChange={this.handleInput} 
                        value={this.state.user1Msg}></input>
                </div>

                <div className="user1">
                    <div className='messageArea'>
                    <div>{user2Data.map((val,i)=>{ if(val.flag){
                            if(val.delete){
                                return <h5 style={{color:'black'}}>This message was deleted<sub>{val.time}</sub></h5>
                            }
                            else{
                                return <h5 style={{textAlign:'left',color:'blue'}} key={val.msg+i}><img src={val.img} style={{width:'30px',height:'30px'}}/>{val.msg}<sub style={{color:'black'}}>{val.time}</sub></h5>
                            }   
                        }
                        else{
                            if(val.delete){
                                return <h5 style={{color:'black', textAlign:'right'}}>You deleted this message<sub style={{color:'black'}}>{val.time}</sub></h5>
                            }
                            else{
                                return <h5 style={{textAlign:'right',color:'green'}} onMouseLeave={this.handleOut} onMouseEnter={()=>this.handleFocus(i)} key={val.msg+i}><img src={val.img} style={{width:'30px',height:'30px'}}/>{val.msg}<sub style={{color:'black'}}>{val.time}</sub>{this.state.flag && this.state.deletingIndex===i ? <div >
                                    <button onClick={()=>this.handleUser2Edit(i)}>Edit</button><span>
                                    <button onClick={()=>this.handleDelete(i)}>Delete</button> </span></div> :null}</h5>
                            }
                           
                        } 
                        })}</div>
                        <div style={{ float: "left", clear: "both" }}
                            ref={(e1) => { this.messagesEnd = e1; }}>
                        </div>
                    </div>
                    <input placeholder='Enter Message' name='user2Msg' onChange={this.handleInput} 
                        value={this.state.user2Msg}></input>
                </div>
            </div>
        );
    }
}

export default hoc(Whatsapp);