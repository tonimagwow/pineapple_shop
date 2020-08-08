import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import Title from './Title';
import CartLayout from './CartLayout';
import Empty from './Empty';
import ListItems from './ListItems'
import Total from './Total'

export default class ShoppingCart extends Component {
    render() {
        return (
            <>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return (
                                // display items in cart
                                <React.Fragment>
                                    <Title name="Shopping Cart" />
                                    <CartLayout  />
                                    <ListItems value={value} />
                                    <Total value={value} />
                                </React.Fragment>
                            );
                        } else {
                            // if cart is empty show empty component
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
