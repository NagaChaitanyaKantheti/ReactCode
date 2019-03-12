import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { deleteNote, addDescription } from '../Action/NoteActions';
import hoc from './Hoc';

class MainApp extends Component{
    constructor(){
        super();
        this.state={
            description:'',
            descriptionFlag:false,
            titleId:'',
            search:''
        }
        this.handleDelete=this.handleDelete.bind(this)
        this.handleTitle=this.handleTitle.bind(this)
        this.handleDescription=this.handleDescription.bind(this)
        this.handleSearch=this.handleSearch.bind(this)
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.escFlag!==this.props.escFlag){
            this.setState({
                descriptionFlag:false
            })
        }
    }


    handleDescription(event){
        let description=event.target.value
        let id=this.state.titleId
        this.props.dispatch(addDescription(description,id))
        this.setState({
            description:description,
        })
    }


    handleDelete(id){
        this.props.dispatch(deleteNote(id))
        this.setState({
            descriptionFlag:false
        })
    }

   
    handleTitle(id){
        this.setState({
            description:this.props.data[id].description,
            descriptionFlag:true,
            titleId:id
        })
    }

    handleSearch(event){
        this.setState({
            search:event.target.value
        })
    }

    render(){
        let {data}=this.props
        let {titleId}=this.state
        return(
            <div>
                <h3>Welcome To NoteTaking App</h3>
                <button><Link to='/Title'>AddNote</Link></button><br/><br/>
                {/* {data.length > 0 ? <table style={{ width: '300px' }}><th><td>Title</td></th>
                    {data.map((entry, i) => {
                        let path = '/Description/' + i
                        return <tr>
                            <td><Link to={path}>{entry.title}</Link></td>
                            <td><button onClick={() => this.handleDelete(i)}>Delete</button></td>
                        </tr>
                    })}
                </table> : null} */}

                {this.state.descriptionFlag?  <div style={{width:'300px',border:'1px solid black', position:'absolute',right:'0'}}>
                <strong>Title: {data[titleId].title}</strong><p>Press tilde to save and exit</p><br/>
                <textarea placeholder='Enter Description' onChange={this.handleDescription}
                    value={this.state.description}></textarea>
            </div> :null}


                {data.length>0 ? <div> <input type='text' onChange={this.handleSearch} placeholder='search...' value={this.state.search}></input><table style={{width:'300px'}}><th><td>Title</td></th>
                    {data.map((entry,i)=>{ 
                        if(entry.title.includes(this.state.search)) {return <tr key={i}>
                            <td><button onClick={()=>this.handleTitle(i)}>{entry.title}</button></td>
                            <td><button onClick={()=>this.handleDelete(i)}>Delete</button></td>
                        </tr>}
                    })}
               </table></div> : null}

                
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        data:state.note.data
    }
}

export default connect(mapStateToProps)(hoc(MainApp));