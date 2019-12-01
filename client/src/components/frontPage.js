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
      <form
        action="/"
        method="POST"
        onSubmit={loginUser}
        className="new__comments-form"
      >
        <h4 className="new__comments-heading-small">Email</h4>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="new__comments-input-name"
        />
        <h4 className="new__comments-heading-small">Password</h4>
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="new__comments-input"
        />
        <div className="new__comments-button-div">
          <button className="new__comments-button">LOGIN</button>
        </div>
      </form>
      <Link to="/homePage">
        <div className="front__page-div-One">
          <img className="front__page-div-One-image" src={running} alt="" />
        </div>
      </Link>
    </section>
  );
}
