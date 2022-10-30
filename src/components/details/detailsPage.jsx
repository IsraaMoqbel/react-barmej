import React from "react";
import Details from "./details";
import data from "../../data/store-items.json";

const detailsPage = ({ addToCart, card }) => {
  return (
    <>
      <div className="details-page">
        <Details card={card} data={data} addToCart={addToCart} />
      </div>
    </>
  );
};

export default detailsPage;
