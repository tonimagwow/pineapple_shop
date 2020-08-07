import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonContainer, Navigation } from '../Styles/styles'



export default class Navbar extends Component {
    render() {
        return (
        <Navigation className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
            <Link to='/'>
                <img src="/img/Pineapple_Main_Color.png" alt="store" className="navbar-brand" />
            </Link>
            <h1 className="navbar-nav mt-4 mr-auto text-white">THE Pineapple</h1>            
            <ul className="navbar-nav ml-auto">
                <li className="nav-item ml-5"></li>
                <Link to='/' className="nav-link mt-4">
                    products
                </Link>
                <Link to='/shoppingcart'>
                    <ButtonContainer className="mt-4">
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        cart
                    </ButtonContainer>
                </Link>
            </ul>
        </Navigation>
        )
    }
}

