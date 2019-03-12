import React,{Component} from 'react';
import ParentProduct from './ParentProduct';
import ParentSearch from './ParentSearch';

class  ParentFilter extends Component{
    constructor(){
        super();
        this.state={
            data:[
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ],
            checkval:false,
            searchData:'',
            searchbool:false
        }
    }

    checkbox=(checkval)=>{
        this.setState({
            checkval:checkval
        });
    }

    updateData=(searchData)=>{
        this.setState({
            searchData:searchData,
        });
    }

    render(){
        let {data}=this.state;
            const regex = new RegExp(this.state.searchdata, 'g');
            data=data.filter((value) => {
            return (value.name.match(regex))});
        return(
            
            <div>
                <ParentSearch checkbox={this.checkbox} updateData={this.updateData}/>
                <ParentProduct displaydata={this.state.data} checkval={this.state.checkval}
                 searchbool={this.state.searchbool} searchData={this.state.searchData}/>
            </div>
        );
    }
}
export default ParentFilter;