import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RunningRoutesFront() {
  const routeUrl = "http://localhost:5000/routes";
  const [routes, setRoutes] = useState([]);

  const uploadNewRoute = event => {
    event.preventDefault();
    if (
      !event.target.name.value ||
      !event.target.comment.value ||
      !event.target.age.value
    ) {
      alert("Please enter all fields. Thank you!");
    } else {
      axios
        .post(routeUrl, {
          name: event.target.name.value,
          age: event.target.age.value,
          comment: event.target.comment.value
        })
        .then(res => {
          setRoutes(res.data);
        });
      event.target.reset();
    }
  };
  console.log(routes);

  useEffect(() => {}, []);
  return (
    <div className="running__page">
      <form
        action="/"
        method="POST"
        onSubmit={uploadNewRoute}
        className="new__routes"
      >
        <h4 className="new__routes-heading-small">Name</h4>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="new__routes-input-name"
        />
        <h4 className="new__routes-heading-small">Age</h4>
        <input
          type="text"
          name="age"
          placeholder="Comment"
          className="new__routes-input"
        />
        <h4 className="new__routes-heading-small">Comment</h4>
        <input
          type="text"
          name="comment"
          placeholder="Comment"
          className="new__routes-input"
        />
        <div className="new__routes-button-div">
          <button className="new__routes-button">SAVE</button>
        </div>
      </form>
    </div>
  );
}
