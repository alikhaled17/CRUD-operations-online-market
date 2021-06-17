import React, { Component } from 'react';
import Product from './product';

class ShoppingCart extends Component {
    render() { 
        const { products, onIncrement, onReset} = this.props;
        return (
            <React.Fragment>
                <br /><br />
                <h1 className="text-muted m-2">Shopping Cart</h1>
                <hr />
                {
                
                products.map(product  =>  (
                    <Product 
                    key={product.id} 
                    product={product} 
                    onIncrement={onIncrement}
                    />
                    
                ))
                
                }
                <button
                    onClick = {onReset} 
                    className="btn btn-secondary btn-sm m-2 w-100"
                > Reset
                </button> 
            </React.Fragment>
        );
    }
}
 
export default ShoppingCart;