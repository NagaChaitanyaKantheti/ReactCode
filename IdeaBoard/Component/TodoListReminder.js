import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {deleteIdea} from '../Action/IdeaBoardAction';
import hoc from './hoc';
import CopyToClipboard from 'react-copy-to-clipboard';



class TodoReminder extends Component{
    constructor(){
        super();
        this.state={
            list:[],
            id:null,
            value:''
        }
        this.handleDelete=this.handleDelete.bind(this);
        this.handleCopy=this.handleCopy.bind(this);
        this.handleMouseEnter=this.handleMouseEnter.bind(this);
        this.handleMouseLeave=this.handleMouseLeave.bind(this);

    }

    handleDelete(i){
        this.props.dispatch(deleteIdea(i))
    }
    

    handleCopy(id){
        let description=null
        let ideaList=this.props.ideaList
        for(let i=0;i<ideaList.length;i++){
            if(ideaList[i].id===id){
                description=ideaList[i].description
            }
        }
       if(description){
        console.log('data>>'+description)
        this.setState({
            value:description,
            copied:true
        })

       }
       
    }

    handleMouseEnter(id){
        this.setState({
            id:id
        })
    }

    handleMouseLeave(){
        this.setState({
            id:null
        })
    }

    render(){
        let ideaList=this.props.ideaList
        let P0list=[]
        let P1list=[]
        let P2list=[]
        if(ideaList.length>0){
            P0list=ideaList.filter((val)=>{ if(val.priority==='P0'){return val}})
            P1list=ideaList.filter((val)=>{ if(val.priority==='P1'){return val}})
            P2list=ideaList.filter((val)=>{ if(val.priority==='P2'){return val}})
            ideaList=ideaList.filter((val)=>{ if(val.priority==='Priority'){return val}})
        }
        let p0Pin=[]
        let p0=[]
        if(P0list.length>0){
            p0Pin=P0list.filter((val)=>{ if(val.pinned===true){return val}})
            p0=P0list.filter((val)=>{ if(val.pinned===false){return val}})
        }

        let p1Pin=[]
        let p1=[]
        if(P1list.length>0){
            p1Pin=P1list.filter((val)=>{ if(val.pinned===true){return val}})
            p1=P1list.filter((val)=>{ if(val.pinned===false){return val}})
        }
        let p2Pin=[]
        let p2=[]
        if(P2list.length>0){
            p2Pin=P2list.filter((val)=>{ if(val.pinned===true){return val}})
            p2=P2list.filter((val)=>{ if(val.pinned===false){return val}})
        }



        let variable=false
        if(P0list.length || P1list.length || P2list.length || ideaList.length){
            variable=true
        }

       
        return(
            <div>
                <div>
                    <h3 style={{color:'arkolivegreen'}}>Hello there...welcome to Todo</h3>
                </div>

                 {variable? 
                         <div style={{ width: '560px', height: '550px', border: '1px solid black' }}>
                         {P0list.length>0?  <div style={{width:'560px',height:'150px',margin:'0 0 10px 0'}}>
                         { P0list.map((entry) => { let path = '/EditForm/' + entry.id
                                return <Link to={path} style={{ textDecoration: 'none' }}><div onMouseEnter={()=>this.handleMouseEnter(entry.id)} onMouseLeave={this.handleMouseLeave} style={{ float: 'left', border: '2px solid green', width: '100px',height:'100px', margin: '10px 0 0 10px', position: 'relative' }} key={entry.id}>
                                    {/* {localTime.getMinutes()-entry.date.getMinutes()>3? <img src="https://www.flaticon.com/premium-icon/icons/svg/276/276346.svg" width="15px" height="15px" alt="Caution premium icon" title="Caution premium icon" style={{ position: 'absolute', top:0, right:'40px' }}/>:null} */}
                                    {entry.date ? <img onClick={this.handleClock} src="https://image.flaticon.com/icons/svg/148/148934.svg" width="15px" height="15px" alt="Alarm clock free icon" title="Alarm clock free icon" style={{ position: 'absolute', top: 0, right: 0 }} /> : null}
                                    {entry.pinned ? <img onClick={this.handlePin} src="https://image.flaticon.com/icons/svg/237/237512.svg" width="15px" height="15px" alt="Push pin free icon" title="Push pin free icon" style={{ position: 'absolute', top: '22px', right: 0 }} /> : null}
                                    <h4>{entry.title}</h4>
                                    <p>{entry.description.substring(0, 6) + '...'}</p>
                                    <div style={{ backgroundColor: 'red', width: "20px", height: "20px", position: 'absolute', top: '44px', right: 0 }}><p style={{ color: 'white' }}>{entry.priority}</p></div>
                                    {this.state.id === entry.id ? <CopyToClipboard text={this.state.value}>
                                        <Link to='/'><button onClick={()=>this.handleCopy(entry.id)}>Copy</button></Link>
                                    </CopyToClipboard> :null}
                                </div></Link>
                         })}</div>:null}

                         {P1list.length>0? <div style={{width:'560px',height:'100px',margin:'0 0 10px 0'}}>
                         { P1list.map((entry) => { let path = '/EditForm/' + entry.id
                             return <Link to={path} style={{ textDecoration: 'none' }} ><div onMouseEnter={()=>this.handleMouseEnter(entry.id)} onMouseLeave={this.handleMouseLeave} style={{ float: 'left', border: '2px solid green', width: '100px', margin: '10px 0 0 10px',position:'relative' }} key={entry.id}>
                                 {entry.date ? <img onClick={this.handleClock} src="https://image.flaticon.com/icons/svg/148/148934.svg" width="15px" height="15px" alt="Alarm clock free icon" title="Alarm clock free icon" style={{ position: 'absolute', top: 0, right: 0 }} /> : null}
                                 {entry.pinned? <img onClick={this.handlePin}  src="https://image.flaticon.com/icons/svg/237/237512.svg" width="15px" height="15px" alt="Push pin free icon" title="Push pin free icon" style={{position:'absolute',top:'22px',right:0}} /> : null}
                                 <h4>{entry.title}</h4>
                                 <p>{entry.description.substring(0,6)+'...'}</p>
                                  <div style={{ backgroundColor: 'orange', width:"20px" ,height:"20px",position:'absolute',top:'44px',right:0}}><p style={{color:'white'}}>{entry.priority}</p></div>
                                  {this.state.id===entry.id? <button>Copy</button> :null}
                             </div></Link>
                         })}</div>:null}


                         {P2list.length>0? <div style={{width:'560px',height:'100px',margin:'0 0 10px 0'}}>
                         { P2list.map((entry) => { let path = '/EditForm/' + entry.id
                             return <Link to={path} style={{ textDecoration: 'none' }} ><div onMouseEnter={()=>this.handleMouseEnter(entry.id)} onMouseLeave={this.handleMouseLeave} style={{ float: 'left', border: '2px solid green', width: '100px', margin: '10px 0 0 10px',position:'relative' }} key={entry.id}>
                                 {entry.date ? <img onClick={this.handleClock} src="https://image.flaticon.com/icons/svg/148/148934.svg" width="15px" height="15px" alt="Alarm clock free icon" title="Alarm clock free icon" style={{ position: 'absolute', top: 0, right: 0 }} /> : null}
                                 {entry.pinned? <img onClick={this.handlePin}  src="https://image.flaticon.com/icons/svg/237/237512.svg" width="15px" height="15px" alt="Push pin free icon" title="Push pin free icon" style={{position:'absolute',top:'22px',right:0}} /> : null}
                                 <h4>{entry.title}</h4>
                                 <p>{entry.description.substring(0,6)+'...'}</p>
                                  <div style={{ backgroundColor: 'yellow', width:"20px" ,height:"20px",position:'absolute',top:'44px',right:0}}><p style={{color:'black'}}>{entry.priority}</p></div>
                                  {this.state.id===entry.id? <button>Copy</button> :null}
                             </div></Link>
                         })}</div>:null}
                         
                         {ideaList.length>0? <div style={{width:'560px',height:'100px',margin:'0 0 10px 0'}}>
                         { ideaList.map((entry) => { let path = '/EditForm/' + entry.id
                             return <Link to={path} style={{ textDecoration: 'none' }} ><div onMouseEnter={()=>this.handleMouseEnter(entry.id)} onMouseLeave={this.handleMouseLeave}  style={{ float: 'left', border: '2px solid green', width: '100px', margin: '10px 0 0 10px',position:'relative' }} key={entry.id}>
                                 {entry.date ? <img onClick={this.handleClock} src="https://image.flaticon.com/icons/svg/148/148934.svg" width="15px" height="15px" alt="Alarm clock free icon" title="Alarm clock free icon" style={{ position: 'absolute', top: 0, right: 0 }} /> : null}
                                 {entry.pinned? <img onClick={this.handlePin}  src="https://image.flaticon.com/icons/svg/237/237512.svg" width="15px" height="15px" alt="Push pin free icon" title="Push pin free icon" style={{position:'absolute',top:'22px',right:0}} /> : null}
                                 <h4>{entry.title}</h4>
                                 <p>{entry.description.substring(0,6)+'...'}</p>
                                 {this.state.id===entry.id? <button>Copy</button> :null}
                             </div></Link>
                         })}</div>:null}
                     </div>
                        
                        : null}
                    <br/> 
                <button><Link to='/Form'>AddTodo</Link></button>&nbsp;&nbsp;<span>
                <button><Link to='/Archive'>ArchiveList</Link></button>
                </span>
                         
                {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                <h1>{this.state.value}</h1>

            </div>
           
        );
    }
}

function mapStateToProps(state){
    return{
        ideaList:state.data.ideaList,
        archiveList:state.data.archiveList
    }
}

export default connect(mapStateToProps)(hoc(TodoReminder));