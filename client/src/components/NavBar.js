import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RacesPage from "./races";
import RunningRoutes from "./runningRoutesFront";
function Header(props) {
  const [state, setState] = useState(true);
  const toggle = () => {
    setState(!state);
  };
  return (
    <header className="navBar">
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
      <RunningRoutes />
      <RacesPage />
    </header>
  );
}

export default Header;
