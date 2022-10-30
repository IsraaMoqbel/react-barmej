import React from "react";
import { NavLink } from "react-router-dom";

const Item = (props) => {
  return (
    <li className="item">
      <NavLink className="item-link" to={`/details/${props.cards.name}`}>
        <img src={props.img} alt={props.cards.name} />
        <div className="item-details">
          <h4 className="item-title">{props.name}</h4>
          <p className="item-price">{props.price}</p>
        </div>
      </NavLink>
    </li>
  );
};
export default Item;
