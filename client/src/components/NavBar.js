import React from "react";
import { NavLink } from "react-router-dom";


function Header(props) {
  return (
    <header className="navBar">
      <NavLink className="navBar__heading" to="/">
        <h2 className="navBar__heading">SPRINT</h2>
      </NavLink>
    
    </header>
  );
}

export default Header;
