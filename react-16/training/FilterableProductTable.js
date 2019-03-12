import React,{Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


class FilterableProductTable extends Component{
    constructor(props){
        super(props);
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
            searchdata:'',
        }
    }

    checkVal=(isChecked)=>{
        this.setState(
           { checkval:isChecked}
        );    
    }

    searchData=(searchdata)=>{
        this.setState({
            searchdata:searchdata
        });
        
    }

    render(){   
        let {data}=this.state;
        const regex = new RegExp(this.state.searchdata, 'g');
        data=data.filter((value) => {
        return (value.name.match(regex))});
        console.log(this.state.searchdata);
        return(
            <div>
               <SearchBar checkVal={this.checkVal} searchdata={this.searchData}/>          
                {data.map((product,i)=> 
                    {
                        if(this.state.checkval) {
                            if(product.stocked){   
                           return <ProductTable key={i} data={product}/>
                            }   
                        }
                        else  return <ProductTable key={i} data={product}/>
                    }
                    )}
            </div>
        );
    }
}
export default FilterableProductTable;