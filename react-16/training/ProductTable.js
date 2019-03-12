import React,{Component} from 'react';

class ProductTable extends Component{    
    render(){
        const product=this.props.data;
        const name=product.stocked?
        product.name:
        <span style={{color:'red'}} >
        {product.name}
        </span>
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>{product.category}</td>
                            <td>{name}</td>
                            <td>{product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );      
    }
}
export default ProductTable