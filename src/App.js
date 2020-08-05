import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Default from './Components/Default';
import Details from './Components/Details';
import ShoppingCart from './Components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch >
          <Route path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/shoppingcart" component={ShoppingCart} />
          <Route  component={Default} />
        </Switch>    
      </React.Fragment>
    )
  }
}

export default App;
