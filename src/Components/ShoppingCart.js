import React, { Component } from 'react';
import Title from './Title';
import CartLayout from './CartLayout';
import Empty from './Empty';
import { ProductConsumer } from "../context";
import ListItems from './ListItems'

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
