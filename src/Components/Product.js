import React, { Component } from 'react';
import { ProductWrapper } from '../Styles/styles';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        const { 
            id, 
            title, 
            img, 
            price, 
            inCart 
        } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card ">
                    {/* revisit to fix height on card div (h-100)*/}
                    <ProductConsumer>
                        {value => (
                            <div 
                                className= "img-container p-5" 
                                onClick={() => 
                                    // console.log("clicked img")
                                    value.handleDetail(id)
                                }
                            >
                                <Link to="/details">
                                    <img
                                        src={img} 
                                        alt="product" 
                                        className="card-img-top"
                                        // height="300"   REVISIT
                                        // width="300"
                                    />
                                </Link>
                                <button 
                                    className= "cart-btn" 
                                    disabled= {inCart ? true : false} 
                                    onClick= {() => {
                                        // console.log('added to cart');
                                        value.addToCart(id);
                                    }} 
                                > {inCart ? (
                                    <p className= "text-capitalize mb-0" disabled> {" "}
                                        in shopping cart
                                    </p>
                                ) : (
                                    <i className="fas fa-cart-arrow-down" />
                                )}
                                </button>
                            </div>
                        )}                        
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                       <p className="mb-0">{title}</p>
                       <h5 className="mb-0">
                           <span className="mr-1">$</span>
                           {price}
                       </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

