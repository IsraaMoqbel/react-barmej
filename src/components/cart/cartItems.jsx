import React from "react";

const MyCart = (props) => {
  return (
    <>
      <div className="cart-items">
        <img src={props.img} alt={props.name} className="img-cart" />
        <p>{props.name}</p>
        <p>{props.quantity}</p>
        <p>{props.price}</p>
        <p className="check-out" onClick={()=>props.removeItem(props.name)}>CHECK OUT</p>
      </div>
      <hr />
    </>
  );
};

export default MyCart;
