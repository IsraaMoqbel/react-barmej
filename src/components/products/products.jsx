import React from "react";
import { NavLink } from "react-router-dom";
import Items from "./items";

const Products = () => {
  
  return (
    <div className="products">
      <Items />
      <div className="more-products-container">
        <NavLink to="/#" className="more-products">
          MORE PRODUCTS
        </NavLink>
      </div>
    </div>
  );
};

export default Products;
