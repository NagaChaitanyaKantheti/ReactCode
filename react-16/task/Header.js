import React,{Component} from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state={
            statusflag:false
        }
    }

    changeformFlag=(formflag)=>{  
        this.props.changeformFlag(formflag);
    }


    filter=(event)=>{
        let filter=event.target.value
        this.setState({
            statusflag:!this.state.statusflag,
        })
        this.props.filterData(filter)
    }

   /* handleList=(checkedIndex)=>{
        let checkedindexList=this.state.checkedindexList
        checkedindexList.push(checkedIndex)
        this.setState({
            checkedindexList:checkedindexList
        })
        this.props.handleCheckedindexList(checkedindexList)
    }*/

    displayDeactivatedList=(deactivateflag)=>{
        this.props.displayDeactivatedList(!deactivateflag)
    }

    handleDeactivate=()=>{
        this.props.handleDeactivatedList()
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.changeformFlag(!this.props.formflag)}>Add</button>
                <button  onClick={this.handleDeactivate} >{this.state.statusflag? 'Activate' : 'Deactivate'}</button>
                <select onChange={this.filter} onClick={()=>this.displayDeactivatedList(this.props.deactivateflag)} >
                    <option value="Active">Active</option>
                    <option value="Deactive">Deactive</option>
                </select>
            </div>
        );
    }
}

export default Header;