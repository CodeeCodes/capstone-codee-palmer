import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RunningRoutesFront() {
  const routesUrl = "http://localhost:5000/routes";
  const [routes, setRoutes] = useState([]);

  const newRoutes = async () => {
    await axios.get(routesUrl).then(res => setRoutes(res.data));
  };
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
        .post(routesUrl, {
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

  useEffect(() => {
    newRoutes();
  }, []);
  let newRoutesDisplay;
  if (routes.length >= 0) {
    newRoutesDisplay = routes.map(function(route) {
      // let timeStamp = comment.date;
      // let toDate = new Date(timeStamp).getDate();
      // let toMonth = new Date(timeStamp).getMonth() + 1;
      // let toYear = new Date(timeStamp).getFullYear();
      // let originalDate = toMonth + "/" + toDate + "/" + toYear;

      return (
        <div className="new__routes-comments" key={route._id}>
          <div className="new__routes-comments-small-div">
            <h4 className="new__routes-comments-name">{route.name}</h4>
            <p className="new__routes-comments-date">{route.date}</p>
          </div>
          <p className="new__-routes-comments-text">{route.comment}</p>
          <button id={route._id} className="new__routes-comments-button-small">
            Delete
          </button>
          <button className="new__routes-comments-button-small">Edit</button>
        </div>
      );
    });
  } else {
    return (
      <div className="error-message-div">
        <h1 className="error-message">Page is loading</h1>
      </div>
    );
  }

  return (
    <div className="running__page">
      <form
        action="/"
        method="POST"
        onSubmit={uploadNewRoute}
        className="new__routes"
      >
        <h4 className="new__routes-comments-heading-small">Name</h4>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="new__routes-comments-input-name"
        />
        <h4 className="new__routes-comments-heading-small">Age</h4>
        <input
          type="text"
          name="age"
          placeholder="Comment"
          className="new__routes-comments-input"
        />
        <h4 className="new__routes-comments-heading-small">Comment</h4>
        <input
          type="text"
          name="comment"
          placeholder="Comment"
          className="new__routes-comments-input"
        />
        <div className="new__routes-comments-button-div">
          <button className="new__routes-comments-button">SAVE</button>
        </div>
      </form>
      <div className="new__routes-comments-div">{newRoutesDisplay}</div>
    </div>
  );
}
