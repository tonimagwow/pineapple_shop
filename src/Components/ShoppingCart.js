import React, { Component } from 'react'
import Title from './Title'
import CartLayout from './CartLayout'

export default class ShoppingCart extends Component {
    render() {
        return (
            <>
                <section className="mt-5">
                    <Title name="Shopping Cart" />
                    
                </section>
                <section className="mt-5">
                    <CartLayout  />
                </section>
            </>
        )
    }
}
