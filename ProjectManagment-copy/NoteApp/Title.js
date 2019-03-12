import React,{Component} from 'react';
import { addNote } from '../Action/NoteActions';
import {withRouter} from 'react-router';
import hoc from './Hoc';
import { connect } from 'react-redux';

class Title extends Component{
    constructor(){
        super();
        this.state={
            title:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.storeData=this.storeData.bind(this)
    }


    
    componentWillReceiveProps(nextProps){
        if(nextProps.escFlag!==this.props.escFlag){
            let path='/'
            this.props.router.push(path)
        }

        if(nextProps.enterFlag!==this.props.enterFlag){
            this.storeData();
            let path = '/'
            this.props.router.push(path)
        }
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    storeData(){
        let {title}=this.state
        let object={'title':title,'description':''}
        this.props.dispatch(addNote(object))
    }

    render(){
        return(
            <div>
                <input type='text' onChange={this.handleChange} name='title' placeholder='Note title'
                    value={this.state.title}></input>
            </div>
        );
    }
}

function mapStateToProps(state){
    //console.log(state.note.data[0].title)
    return{
        data:state.note.data
    }
}

export default withRouter(connect(mapStateToProps)(hoc(Title)));