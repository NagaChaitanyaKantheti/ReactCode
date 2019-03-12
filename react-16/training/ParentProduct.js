import React,{Component} from 'react';
import ProductDetails from './ProductDetails';

class ParentProduct extends Component{
    render(){
        const data=this.props.displaydata;
        return(
            <div>
                {data.map((product,i)=>{
                    if(this.props.checkval){
                        if(product.stocked){
                            return <ProductDetails key={i} displaydata={product}/>
                        }
                    }
                    else return <ProductDetails key={i} displaydata={product}/>
                })}   
            </div>
        );
    }
}

export default ParentProduct;