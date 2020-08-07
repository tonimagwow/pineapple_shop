import React, { Component } from 'react';
import Title from './Title';
import CartLayout from './CartLayout';
import Empty from './Empty';
import { ProductConsumer } from "../context";

export default class ShoppingCart extends Component {
    render() {
        return (
            <>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <section className="mt-5">
                                        <Title name="Shopping Cart" />                    
                                    </section>
                                    <section className="mt-5">
                                        <CartLayout  />                    
                                    </section>
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <section className="mt-5">                    
                                    <Empty />
                                </section>
                            )
                        }
                    }}
                </ProductConsumer>                
            </>
        )
    }
}
