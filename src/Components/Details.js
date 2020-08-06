import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Styles/styles'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
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
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h5>{model}</h5>
                                    <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        <span className="text-uppercase">
                                            {description}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}
