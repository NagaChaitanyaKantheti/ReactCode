import React,{Component} from 'react';

class ParentSearch extends Component{
    constructor(props){
        super(props);
        this.state={
            checkval:false,
            searchData:'',
            searchbool:false
        }
    }

    check=(event)=>{
        this.setState(
           {checkval:event.target.checked}, 
           this.props.checkbox(!this.state.checkval)
        );
    }

    updateData=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            searchbool:!this.state.searchbool
            },
        this.props.updateData(this.state.searchData,this.state.searchbool)
        );    
    }

    

    render(){
        return(
            <div>
                <input type="text" name="searchData" placeholder="search" onChange={this.updateData} value={this.state.searchData} /><br/>
                <input type="checkbox" name="checkval" onChange={this.check}/>show only available data
            </div>
        );
    }
}

export default ParentSearch;