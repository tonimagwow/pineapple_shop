import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
// import { storeProducts } from '../items'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {
    // state = {
    //     products: storeProducts
    // };
    render() {
        // console.log(this.state.products);

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our products" />                        
                        <div className="row mt-4">
                            <ProductConsumer>
                                {(value) => {
                                    // console.log(value);
                                    return value.products.map( product => {
                                        return <Product key={product.id} product= {product} />;
                                    })
                                }}
                            </ProductConsumer>
                        </div>                
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}