import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Styles/styles'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { 
                        id, 
                        model, 
                        img, 
                        description, 
                        price, 
                        title, 
                        inCart 
                    } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h1>{ title }</h1>
                                </div>
                            </div>
                            {/* Product description */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img 
                                        src={img} 
                                        className="img-fluid" 
                                        alt="product" 
                                    />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h6>model : {model}</h6>
                                    <h6>
                                        <strong className="mt-4">
                                            price : <span>$</span>
                                            { price }
                                        </strong>
                                    </h6>

                                    <p className="text-capitalize font-weight-bold mt-2 mb-0">
                                        description :                                        
                                    </p>
                                    <p className="text-muted">
                                        { description }
                                    </p>
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                keep shopping
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            disabled= {inCart ? true : false}
                                            onClick={() =>{
                                                value.addToCart(id);
                                            }}
                                        >
                                            {inCart ? "already in cart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}
