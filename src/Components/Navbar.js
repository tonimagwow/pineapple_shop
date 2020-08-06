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
            <ul className="navbar-nav align-items-right ml-auto">
                <li className="nav-item ml-5"></li>
                <Link to='/' className="nav-link">
                    products
                </Link>
                <Link to='/shoppingcart'>
                    <ButtonContainer>
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

