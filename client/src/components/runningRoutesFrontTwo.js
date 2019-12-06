import React, { useState, useEffect } from "react";
import axios from "axios";
import running from "../assets/svg/running.svg";

export default function RunningRoutesFrontTwo() {
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
          setRoutes([res.data, ...routes]);
        });
      event.target.reset();
    }
  };
  const deleteRoute = async e => {
    await axios
      .delete(`${routesUrl}/${e.target.id}`)
      .then(res => setRoutes(res.data));
  };

  useEffect(() => {
    newRoutes();
  }, [setRoutes]);
  let newRoutesDisplay;
  if (routes.length >= 0) {
    newRoutesDisplay = routes.map(function(route) {
      // let timeStamp = comment.date;
      // let toDate = new Date(timeStamp).getDate();
      // let toMonth = new Date(timeStamp).getMonth() + 1;
      // let toYear = new Date(timeStamp).getFullYear();
      // let originalDate = toMonth + "/" + toDate + "/" + toYear;

      return (
        <div className="new2__routes-comments" key={route._id}>
          <div className="new2__routes-comments-small-div">
            <h4 className="new2__routes-comments-name">{route.name}</h4>
            <p className="new2__routes-comments-date">{route.age}</p>
            <p className="new2__routes-comments-date">{route.date}</p>
          </div>
          <p className="new__-routes-comments-text">{route.comment}</p>

          <button
            id={route._id}
            onClick={deleteRoute}
            className="new2__routes-comments-button-small"
          >
            Delete
          </button>
        </div>
      );
    });
  } else {
    return (
      <div className="front__page-div-One">
        <img className="front__page-div-One-image" src={running} alt="" />
      </div>
    );
  }

  return (
    <>
      <div className="running2__page">
        <h2 className="running2__page-heading">Routes</h2>

        <form
          action="/"
          method="POST"
          onSubmit={uploadNewRoute}
          className="new2__routes"
        >
          <h4 className="new2__routes-comments-heading-small">Name</h4>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="new2__routes-comments-input-name"
          />
          <h4 className="new2__routes-comments-heading-small">Age</h4>
          <input
            type="text"
            name="age"
            placeholder="Comment"
            className="new2__routes-comments-input"
          />
          <h4 className="new2__routes-comments-heading-small">Route</h4>
          <input
            type="text"
            name="route"
            placeholder="Route"
            className="new2__routes-comments-input"
          />
          <h4 className="new2__routes-comments-heading-small">Comment</h4>
          <input
            type="text"
            name="comment"
            placeholder="Comment"
            className="new2__routes-comments-input"
          />
          <div className="new2__routes-comments-button-div">
            <button className="new2__routes-comments-button">SAVE</button>
          </div>
        </form>
        <div className="new2__routes-comments-div">{newRoutesDisplay}</div>
      </div>
    </>
  );
}
