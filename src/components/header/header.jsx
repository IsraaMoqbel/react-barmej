import React from "react";
import Menu from "./menu";

const Header = (props) => {
  return (
    <header>
      <nav>
        <Menu cartCount={props.cartCount}/>
      </nav>
    </header>
  );
};

export default Header;
