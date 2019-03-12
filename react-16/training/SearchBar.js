import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            ischecked:false,
            searchdata:'',
        }
    }
    checkfun=(e)=>{
          this.setState(
              {ischecked :e.target.checked},
              this.props.checkVal(!this.state.ischecked)
          );
    }

    changeData=(event)=>{
        this.setState({
            [event.target.name]:event.target.value}
        );
        this.props.searchdata(this.state.searchdata);
    }

    render(){
        return(
            <div>
                <input type="text" name="searchdata"  placeholder="Search" onChange={this.changeData} value={this.state.searchdata}></input>
                 <br/>
                 <input type="checkbox" name="check"  
                 onChange={this.checkfun}></input>Only show products inStock
                 
            </div>
        );
    }
}
export default SearchBar;