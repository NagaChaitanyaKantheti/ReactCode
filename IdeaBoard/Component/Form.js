import React,{Component} from 'react';
import { connect } from 'react-redux';
import {addIdea, editIdea, changeEditFlag, addToArchiveList} from '../Action/IdeaBoardAction';
import {Link, withRouter} from 'react-router';
import hoc from './hoc';
import Datetime from 'react-datetime';


class Form extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            description:'',
            priority:'Priority',
            archive:false,
            pinned:false,
            date:null,
            clockFlag:false,
           // setDate:null
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInput=this.handleInput.bind(this)
        this.componentDidMount=this.componentDidMount.bind(this)
        this.handleArchive=this.handleArchive.bind(this)
        this.handlePin=this.handlePin.bind(this)
        this.handleClock=this.handleClock.bind(this)
        this.handleClockInput=this.handleClockInput.bind(this)
    }

    componentDidMount(){
        const ideaList=this.props.ideaList
        const id =this.props.params.index
        if(id && ideaList[id].date){
            this.props.dispatch(changeEditFlag())
            this.setState({
                title: ideaList[id].title,
                description: ideaList[id].description,
                priority: ideaList[id].priority,
                pinned:ideaList[id].pinned,
                clockFlag:true,
                date:ideaList[id].date,
            })
        }
        else if(id){
            this.props.dispatch(changeEditFlag())
            this.setState({
                title: ideaList[id].title,
                description: ideaList[id].description,
                priority: ideaList[id].priority,
                pinned:ideaList[id].pinned,
                date:ideaList[id].date,
            })
        } 
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.enterFlag!==this.props.enterFlag){
            if(this.state.title.trim().length>0){
                this.handleSubmit();
                let path='/'
                this.props.router.push(path)
            }
            else{
                alert('Please fill the details')
            }
        }
        if(nextProps.escFlag!==this.props.escFlag){
            let path='/'
            this.props.router.push(path)
        }
    }


    handleSubmit(){
        let { title, description,priority,pinned,archive,date} = this.state
        if(this.props.editFlag){  
            let ideaList=this.props.ideaList
            let index=this.props.params.index
            let object={'id':ideaList[index].id,'title': title, 'description': description,'priority':priority,'pinned':pinned,'archive':archive,'date':date}
            this.props.dispatch(editIdea(index,object))
            this.setState({
                pinned:!this.state.pinned,
                clockFlag:!this.state.clockFlag
            })
        }
        else{
            let id=this.props.id
            let object = {'id':id,'title': title, 'description': description,'priority':priority,'pinned':pinned,'archive':archive,'date':date}
            this.props.dispatch(addIdea(object))
            this.setState({
                pinned:!this.state.pinned,
                clockFlag:!this.state.clockFlag
            })
        }
        
    }


    handleInput(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    handleArchive(){
        const id =this.props.params.index
        this.props.dispatch(addToArchiveList(id))
    }

    handlePin(){
        this.setState({
            pinned:!this.state.pinned
        })
    }

    handleClockInput(date){
       // console.log('Date>>>>>'+date.getHours())
        this.setState({
            date:date
        })
    }

    handleClock(){
        this.setState({
            clockFlag:!this.state.clockFlag
        })
    }

    render(){
        let today=new Date()
      // console.log('>>'+today.getMilliseconds())
        return(
            
            <div>
                <table style={{width:'200px'}}>
                    <tbody>
                        <tr><td>
                        {this.state.pinned? <img onClick={this.handlePin}  src="https://image.flaticon.com/icons/svg/237/237512.svg" width="20" height="20" alt="Push pin free icon" title="Push pin free icon" style={{position:'absolute',top:0,right:'550px'}} /> :
                         <img onClick={this.handlePin}  src="https://image.flaticon.com/icons/svg/238/238081.svg" width="20" height="20" alt="Push pin free icon" title="Push pin free icon" style={{position:'absolute',top:0,right:'550px'}}/>}
                        </td>
                        
                        <td>
                        {this.state.clockFlag? <img  onClick={this.handleClock} src="https://image.flaticon.com/icons/svg/148/148934.svg" width="20" height="20" alt="Alarm clock free icon" title="Alarm clock free icon"style={{position:'absolute',top:0,right:'500px'}}/>: 
                        <img onClick={this.handleClock} src="https://image.flaticon.com/icons/svg/149/149315.svg" width="20" height="20" alt="Alarm clock free icon" title="Alarm clock free icon" style={{position:'absolute',top:0,right:'500px'}}/>}
                        
                        </td>
                        
                        </tr>
                        <br/>
                        <tr>
                            <td>
                                <input style={{width:'200px',border:'none'}}type='text' value={this.state.title} placeholder='IdeaTitle'
                                    name='title' onChange={this.handleInput}></input><br />
                            </td></tr>
                            <br/>
                        <tr><td>
                            <textarea style={{width:'200px',border:'none'}} placeholder='Description' value={this.state.description}
                                name='description' onChange={this.handleInput}></textarea><br />
                        </td></tr>
                        <br/>
                        <tr><td>
                            <select style={{width:'200px',border:'none'}} type="text" name="priority" defaultValue={this.state.priority} onChange={this.handleInput} value={this.state.priority}>
                                <option>Priority</option>
                                <option>P0</option>
                                <option>P1</option>
                                <option>P2</option>
                            </select>
                        </td></tr>
                        <br/>
                       {this.props.editFlag? <tr><td>
                            <button style={{width:'200px'}} onClick={this.handleArchive}><Link to='/'>Archive</Link></button>
                        </td></tr> : null} 

                        <tr>
                            <td >
                                {this.state.clockFlag ?
                                    <Datetime style={{ width: '200px' }} closeOnSelect={true}
                                        onChange={this.handleClockInput} dateFormat={true} 
                                        value={this.state.date}/>
                                : null}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        ideaList:state.data.ideaList,
        editFlag:state.data.editFlag,
        editIndex:state.data.editIndex,
        id:state.data.id
    }
}


export default withRouter(connect(mapStateToProps)(hoc(Form)))




