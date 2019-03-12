import React,{Component} from 'react';
import {connect} from 'react-redux';
import hoc from './Hoc';
import {withRouter} from 'react-router';
import { addDescription } from '../Action/NoteActions';



class Description extends Component{
    constructor(){
        super();
        this.state={
            description:''
        }
        this.handleDescription=this.handleDescription.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.escFlag!==this.props.escFlag){
            let path='/'
            this.props.router.push(path)
        }
    }

    componentDidMount(){
        this.setState({
            description:this.props.data[this.props.params.index].description
        })
    }

    handleDescription(event){
        let description=event.target.value
        let id=this.props.params.index
        this.props.dispatch(addDescription(description,id))
        this.setState({
            description:description
        })
    }


    render(){
        return(
            <div>
                <strong>Press tilde to save and exit</strong><br/>
                <textarea placeholder='Enter Description' onChange={this.handleDescription}
                    value={this.state.description}></textarea>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        data:state.note.data
    }
}

export default withRouter(connect(mapStateToProps)(hoc(Description)));



