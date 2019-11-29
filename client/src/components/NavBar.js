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
        to="/"
        activeStyle={{
          color: "$white",
          borderBottom: "3px solid $white"
        }}
      >
        <h2>SPRINT</h2>
      </NavLink>
    </div>
  );
}

export default Header;
