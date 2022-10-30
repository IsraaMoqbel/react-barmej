import React from "react";
import { NavLink } from "react-router-dom";

const footerMenu = () => {
  return (
    <ul className="footer-nav-menu">
      <div className="first">
        <li>
          <NavLink exact to="/" className="navbar-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" className="navbar-item">
            Customer Care
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" className="navbar-item">
            Instgram
          </NavLink>
        </li>
      </div>
      <div className="last">
        <li>© Pretend Store</li>
      </div>
    </ul>
  );
};
export default footerMenu;
