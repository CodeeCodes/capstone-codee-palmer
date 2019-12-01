import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import running from "../assets/svg/running.svg";
const loginUrl = "http://localhost:5000/login";

export default function frontPage() {
  const loginUser = event => {
    event.preventDefault();
    axios
      .post(loginUrl, {
        email: event.target.email.value,
        password: event.target.password.value
      })
      .then(res => {
        console.log("logged in");
        console.log(res);
      });
    event.target.reset();
  };

  return (
    <section className="front__page">
      <div className="front__page-div">
        <form
          action="/"
          method="POST"
          onSubmit={loginUser}
          className="front__page-form"
        >
          <h4 className="front__page-heading-small">Email</h4>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="front__page-input-name"
          />
          <h4 className="front__page-heading-small">Password</h4>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="front__page-input"
          />
          <div className="front__page-button-div">
            <button className="front__page-button">LOGIN</button>
          </div>
        </form>
        <Link to="/homePage">
          <div className="front__page-div-One">
            <img className="front__page-div-One-image" src={running} alt="" />
          </div>
        </Link>
      </div>
    </section>
  );
}
