import React from "react";
import MyCart from "../components/cart/cartItems";

const Cart = (props) => {

  let quantity = 0;
  let total = 0;
  props.cart.forEach((value) => {
    let number = parseFloat(value.price.replace(/[^0-9.-]+/g, ""));
    number *= value.quantity;
    quantity += Number(value.quantity);
    total += number;
  });

  return (
      // <h1>Your Cart</h1>
    <div className="cart-container">
      <hr />
      {props.cart.length > 0 ? props.cart.map((item) => {
        return (
          <MyCart
            img={item.image}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            removeItem={props.removeItem}
          />
        );
      }) : <p className="no-items">Oops, no items in your cart yet!</p>}
      {props.cart.length > 0 && <div className="all-items">
        <p>All items</p>
        <p>{quantity}</p>
        <p>{total}</p>
        <p onClick={props.checkoutAll}>CHECK OUT ALL</p>
      </div>}
    </div>
  );
};

export default Cart;
