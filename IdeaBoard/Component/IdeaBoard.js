import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {changeEditFlag,deleteIdea} from '../Action/IdeaBoardAction';




class IdeaBoard extends Component{
    constructor(){
        super();
        this.state={
            list:[],
            filterFlag:null
        }
        this.handleEdit=this.handleEdit.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleFilter=this.handleFilter.bind(this);
    }


    handleEdit(){
        this.props.dispatch(changeEditFlag())
    }

    handleDelete(i){
        this.props.dispatch(deleteIdea(i))
    }

    handleFilter(event){
        let status=event.target.value
        let list=this.props.ideaList
        if(status==='title'){
            list.sort(function(a,b){
                if(a.title>b.title){
                    return 1
                }
            })      
        }
        else if(status==='date'|| status==='normal'){
            list.sort(function(a,b){
                if(a.date>b.date){
                    return 1
                }
            }) 
        }
        this.setState({
            list:list,
            filterFlag:status
        })
    }

    render(){
        const ideaList=this.props.ideaList
        console.log(this.state.filterFlag)
        return(
            <div>
                <div>
                    <h3 style={{color:'arkolivegreen'}}>Hello there...welcome to IdeaBoard</h3>
                    <button><Link to='/Form'>AddIdea</Link></button>
                    <select onChange={this.handleFilter}>
                        <option>select</option>
                        <option value='normal'>Normal</option>
                        <option value='title'>Title</option>
                        <option value='date'>Date</option>
                    </select>
                </div>

                {(this.state.filterFlag==='title' || this.state.filterFlag==='date')?  
                <div style={{width:'600px',height:'100%'}}>
                    {ideaList.length>0?
                        this.state.list.map((entry,i)=> { let path='/EditForm/'+i 
                        return <div style={{border:'2px solid green',width:'150px',margin:'10px 0 0 10px'}} key={i}>
                                <strong>{entry.title}</strong>
                                <p>{entry.description}</p>
                                <button onClick={this.handleEdit}><Link to={path}>Edit</Link></button>
                                <button onClick={()=>this.handleDelete(i)}>Delete</button>
                        </div>})
                        
                        :null}
                </div> : 
                    <div style={{width:'600px'}}>
                    {ideaList.length>0?
                        ideaList.map((entry,i)=> { let path='/EditForm/'+i 
                        return <div style={{border:'2px solid green',width:'150px',margin:'10px 0 0 10px'}} key={i}>
                                <strong>{entry.title}</strong>
                                <p>{entry.description}</p>
                                <button onClick={this.handleEdit}><Link to={path}>Edit</Link></button>
                                <button onClick={()=>this.handleDelete(i)}>Delete</button>
                        </div>})
                        
                        :null}
                </div>
                } 
                

                

                
            </div>
           
        );
    }
}

function mapStateToProps(state){
    return{
        ideaList:state.data.ideaList,
        filterFlag:state.data.filterFlag
    }
}

export default connect(mapStateToProps)(IdeaBoard);