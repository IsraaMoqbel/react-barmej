import React, { useEffect, useState } from "react";
import MoreProducts from "./moreProducts";

const Details = (props) => {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cardId = props.card;
  const cards = props.data.find((card) => card.name.includes(cardId));

  return (
    <>
      <div className="details-content">
        <div className="small-pic">
          <img src="/img/item-1.png" style={{ visibility: false }} alt=""/>
          <img src="/img/item-2.png" style={{ visibility: false }} alt=""/>
          <img src="/img/item-3.png" style={{ visibility: false }} alt=""/>
        </div>
        <div className="big-pic">
          <img src={cards.image} style={{ visibility: false }} alt=""/>
        </div>
        <div className="details">
          <h1 className="price">{cards.price}</h1>
          <h2 className="detail-title">{cards.name}</h2>
          <p className="detail-para">{cards.description}</p>
          <div className="colorS">
            <div className="color-section">
              <p className="color-tag">Color :</p>
              <p>Pink</p>
            </div>
            <div className="squares">
              <div className="first-square">
                <div className="circle"></div>
              </div>
              <div className="second-square"></div>
              <div className="third-square"></div>
            </div>
          </div>
          <div className="add-to-cart">
            <input
              type="number"
              className="cart"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              className="add-button"
              onClick={() => {
                cards.quantity = quantity;
                props.addToCart(cards);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <MoreProducts />
    </>
  );
};

export default Details;
