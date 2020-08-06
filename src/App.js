import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import ShoppingCart from './Components/ShoppingCart';
import Default from './Components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>          
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/shoppingcart" component={ShoppingCart} />
          <Route  component={Default} />
        </Switch>    
      </React.Fragment>
    )
  }
}

export default App;
