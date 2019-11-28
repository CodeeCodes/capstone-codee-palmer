import React, { useState } from "react";


function Header(props) {
  const [state, setState] = useState(true);

  const toggle = () => {
    setState(!state);
  };
  return (
    <div className="navBar">
     <h2 className="navBar––heading">SPRINT</h2>
    </div>
  );
}

export default Header;
