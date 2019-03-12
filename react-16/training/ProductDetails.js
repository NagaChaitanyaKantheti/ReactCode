import React,{Component} from 'react';

class ProductDetails extends Component{
    render(){
        const product = this.props.displaydata;
        const name=product.stocked?
            product.name :
            <span style={{color:'red'}}>
                {product.name}
            </span>
        return(
            <div>
                <table>
                    <tbody><tr>
                        <td>{product.category}</td>
                        <td>{name}</td>
                        <td>{product.price}</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductDetails;