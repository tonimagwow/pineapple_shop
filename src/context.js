import React, { Component } from 'react'
import { storeProducts, detailProduct } from './Products/items'

const ProductContext = React.createContext();
// provide info



class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart:[],
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
            () => {
                this.addTotals()
                // console.log(this.state);
            }
            
        );
    };

    // add totals for the cart
    increase = (id) => {
        console.log('increase working')
    }
    decrease = (id) => {
        console.log('decrease working')
            
    }
    remove = (id) => {
        console.log('removes working')
            
    }
    clear = () => {
        console.log('clears working')
            
    }
    // total price and tax combined
    addTotals = () => {
        let subAmount = 0;
        this.state.cart.map(item => (subAmount += item.total));
        const taxAmount = subAmount * 0.1;
        const overAllTax = parseFloat(taxAmount.toFixed(2));
        const overAllTotal = subAmount + overAllTax
        
        this.setState(() => {
            return {
                subTotal: subAmount,
                tax: overAllTax,
                total: overAllTotal
            }             
        })
    }

    render() {
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    increase: this.increase,
                    decrease: this.decrease,
                    remove: this.remove,
                    clear: this.clear,
                }}
            >
                {this.props.children}                
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }