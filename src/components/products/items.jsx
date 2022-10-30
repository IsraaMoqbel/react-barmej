import React from "react";
import Item from "./item";
import data from "../../data/store-items.json";

const Items = () => {
  const itemsList = data.map((item) => {
    return (
      <Item
        key={item.image}
        name={item.name}
        img={item.image}
        price={item.price}
        cards={item}
      />
    );
  });
  return <ul className="flex-items">{itemsList}</ul>;
};
export default Items;
