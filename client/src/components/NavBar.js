import React from "react";
import { NavLink } from "react-router-dom";

import RunningRoutes from "./runningRoutesFront";
function Header(props) {
  return (
    <header className="navBar">
      <NavLink className="navBar__heading" to="/">
        <h2 className="navBar__heading">SPRINT</h2>
      </NavLink>
      <RunningRoutes />
    </header>
  );
}

export default Header;
