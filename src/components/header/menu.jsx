import React from "react";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <ul className="nav-menu">
      <div className="left">
        <li>
          <NavLink className="navbar-item" exact to="/">
            <img src="/img/logo.svg" alt="logo"/>
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item" exact to="/">
            Collection
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-item" exact to="/">
            Contact
          </NavLink>
        </li>
      </div>
      <div className="right">
        <li>
          <NavLink className="navbar-item width flex " exact to="/cart">
            {props.cartCount > 0 && <p className="cart-tag">{props.cartCount}</p>}
            <img src="/img/cart.svg" alt="cart-icon"/>
            <p className="cart-tag">Cart</p>
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default Menu;
