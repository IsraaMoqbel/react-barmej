import React, { useEffect } from "react";
import Item from "../products/item";
import data from "../../data/store-items.json";

const MoreProducts = () => {
  const moreProducts = data.map((item) => {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [moreProducts]);
  return (
    <div className="more-products">
      <h1>Might also like</h1>
      <div className="img-container">{moreProducts.slice(0, 3)}</div>
    </div>
  );
};

export default MoreProducts;
