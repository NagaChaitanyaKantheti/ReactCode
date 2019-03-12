import React,{Component} from 'react';

class FilterableProductTable extends Component{
    constructor(){
        super();
        this.state={
            Category:['Sporting Goods','Electronic Goods'],
            Name:['FootBall','BasketBall','BaseBall','Iphone','Ipod Touch','Nexux'],
            Price:[400,500,100,50000,10000,20000]
        }
    }

    render(){
        return(
            <div>
                <SearchBar/>
                <ProductTable displaydata={this.state.data}/>
            </div>
        );
    }

}


class SearchBar extends Component{
    render(){
        return(
            <div>
                <input type="text" placeholder="Search.." name="search"/><br/>
                <input type="checkbox"/>Only show Products in stock
            </div>
        );
    }
}


class ProductTable extends Component{
    render(){
        const{Clist,Plist,Prlist}=this.props.displaydata;
        console.log(Clist);
        for(let i in Clist){
            
        }
        return(
            <div>
                <table>
                    <tbody>
                        <th><tr>
                            <td style={{text:'bold'}}>Category</td>
                            <td style={{text:'bold'}}>Name</td>
                            <td style={{text:'bold'}}>Price</td>
                        </tr></th>
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

class ProductDetails extends Component{
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <td>{this.props.displaydata.Category}</td>
                        <td>{this.props.displaydata.Name}</td>
                        <td>{this.props.displaydata.Price}</td>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FilterableProductTable;