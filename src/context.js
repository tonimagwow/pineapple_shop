import React, { Component } from 'react'
import { storeProducts, detailProduct } from './Products/items'

const ProductContext = React.createContext();
// provide info



class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart:storeProducts,
        subTotal: 0,
        tax: 0,
        total: 0
    };
    componentDidMount() {
        this.setProducts();
    };
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { products: tempProducts }
        });
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    // shows product that's been selected and provides info
    handleDetail = id => {
        // console.log('details');
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        });
    };
    addToCart = id => {
        // console.log(`cart.id ${id}`);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
            },
            () => {console.log(this.state);
            }
        );
    };
    increment = (id) => {
        console.log('increments working')
    }
    decrement = (id) => {
        console.log('decrements working')
            
    }
    remove = (id) => {
        console.log('removes working')
            
    }
    clearCart = () => {
        console.log('clears working')
            
    }
    render() {
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    increment: this.increment,
                    decrement: this.decrement,
                    remove: this.remove,
                    clearCart: this.clearCart,
                }}
            >
                {this.props.children}                
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }