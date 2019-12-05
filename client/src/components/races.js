import React, { useState, useEffect } from "react";
import axios from "axios";
import meetUpLogo from "../assets/svg/meetup-vector-logo.svg";
import { setImmediate } from "timers";

export default function Races() {
  const runUrl = "https://api.meetup.com/VanRun/events";
  const corsURL = "https://cors-anywhere.herokuapp.com/";
  const [races, setRaces] = useState([]);

  const getRaces = () => {
    axios.get(`${corsURL}${runUrl}`).then(res => {
      setRaces(res.data);
    });
  };

  function searchRaces(e) {
    e.preventDefault();
    e.persist();
    const input = e.target.raceSearch.value;
    console.log(input);
    const searchResult = races.filter(obj =>
      obj.name.toLowerCase().includes(input.toLowerCase())
    );
    setRaces([searchResult]);
  }

  useEffect(() => {
    getRaces();
  }, [setRaces]);
  console.log(races);

  const renderRacesFront = races.map(function(race) {
    return (
      <div className="races" key={race.id}>
        <h3>{race.name}</h3>
        <h4>{race.local_date}</h4>
        <a href={race.link}>
          <img
            src={meetUpLogo}
            alt="meetup logo"
            className="races__main-logo"
          />
        </a>
      </div>
    );
  });

  return (
    <div className="races-main">
      {" "}
      <h2 className="races__main-heading">Upcoming Races</h2>
      <form className="races__search" onSubmit={searchRaces}>
        <input type="text" name="raceSearch" className="races__search-input" />
      </form>
      <div className="races__main">
        <div className="races"> </div>
        {renderRacesFront}
      </div>
    </div>
  );
}
