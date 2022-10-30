import React from "react";
import { NavLink } from "react-router-dom";

const HeroRight = () => {
  return (
    <div className="hero-right">
      <div className="hero-flex">
        <h2 className="hero-header">Lorem ipsum dolor sit amet</h2>
        <p className="hero-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          totam provident deleniti ea dignissimos necessitatibus itaque maxime
          quam, sapiente error eum molestias quaerat aperiam sed! Consequuntur
          similique unde voluptates nesciunt.
        </p>
        <NavLink to="/" className="our-products">
          OUR PRODUCTS
        </NavLink>
      </div>
    </div>
  );
};
export default HeroRight;
