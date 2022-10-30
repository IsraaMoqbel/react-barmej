import React from "react";
import Homepage from "./pages/homePage";
import Cart from "./pages/cart";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Newsletter from "./components/newsletter/newsletter";
import { BrowserRouter, Route } from "react-router-dom";
import DetailsPage from "./pages/detailsPage";

class App extends React.Component {
  state = {
    cart: [],
    cartCount: 0
  };

  addToCart = (item) => {
    console.log(item)
    if (item) {
      this.setState({
        cart: [...this.state.cart, item],
        cartCount: this.state.cartCount + parseInt(item.quantity),
      });
    }
  };

  RemoveFromCart = (name) => {
    const itemToRemove = this.state.cart.filter(e => e.name === name)[0];
    const index = this.state.cart.indexOf(itemToRemove);

    if (index > -1) {
      this.setState({
        cart: this.state.cart.filter((_, i) => i !== index),
        cartCount: this.state.cartCount - parseInt(itemToRemove.quantity),
      });
    }
  };

  checkoutAll = () => {
    this.setState({
      cart: [],
      cartCount: 0,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Header cartCount={this.state.cartCount}/>
        <>
          <Route
            exact
            path="/"
            render={() => <Homepage disableHeader={this.disableHeader} />}
          />
        </>
        <>
          <Route
            exact
            path="/details/:id"
            render={(props) => (
              <DetailsPage addToCart={this.addToCart} {...props} />
            )}
          />
        </>
        <>
          <Route
            exact
            path="/cart"
            render={() => (
              <Cart cart={this.state.cart} removeItem={this.RemoveFromCart} checkoutAll={this.checkoutAll}/>
            )}
          />
        </>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
