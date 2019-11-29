import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [state, setState] = useState(true);
  const toggle = () => {
    setState(!state);
  };
  return (
    <div className="navBar">
      <NavLink
        className="navBar__heading"
        to="/homePage"
        activeStyle={{
          color: "$white",
          borderBottom: "3px solid $white"
        }}
      >
        <h2>SPRINT</h2>
      </NavLink>
      <NavLink
        className="navBar__heading"
        to="/mapPage"
        activeStyle={{
          color: "$white",
          borderBottom: "3px solid $white"
        }}
      >
        <h3>ROUTES</h3>
      </NavLink>
    </div>
  );
}

export default Header;
