import React,{Component} from 'react';

class Red extends Component{
    constructor(){
        super();
        this.state={
            bookingInfo:[]
        }   
    }

    render(){
        return(
            <div>
                

            </div>
        );
    }


}

export default Red;





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
            submit:true
        })
}


