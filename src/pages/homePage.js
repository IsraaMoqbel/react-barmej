import React from "react";
import Hero from "../components/hero/hero";
import Products from "../components/products/products";

class Homepage extends React.Component {
  render() {
    return (
      <div className="container">
        <Hero />
        <Products />
      </div>
    );
  }
}

export default Homepage;
