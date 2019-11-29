import React from "react";
import { Link } from "react-router-dom";
import running from "../assets/svg/running.svg";
import MapBox from "./mapBoxMap";

export default function frontPage() {
  return (
    <section className="front__page">
      <Link to="/homePage">
        <div className="front__page-div-One">
          <img className="front__page-div-One-image" src={running} alt="" />
        </div>
      </Link>
     
    </section>
  );
}
