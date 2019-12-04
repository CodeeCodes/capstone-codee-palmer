import React, { useState, useEffect } from "react";
import axios from "axios";
import meetUpLogo from "../assets/svg/meetup-vector-logo.svg";

export default function Races() {
  const runUrl = "https://api.meetup.com/VanRun/events";
  const corsURL = "https://cors-anywhere.herokuapp.com/";
  const [races, setRaces] = useState([]);
  const [show, setShow] = useState(false);
  // const [searchState, setSearchState] = useState([]);

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
    console.log(searchResult);
    setRaces([searchResult]);
  }

  useEffect(() => {
    getRaces();
  }, []);

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
      <form className="races__search" onSubmit={searchRaces}>
        <input type="text" name="raceSearch" />
      </form>
      <div className="races__main">
        <div className="races">
          {" "}
          <h2
            variant="secondary"
            onClick={() => setShow(true)}
            className="races__heading"
          >
            Upcoming Races
          </h2>
        </div>

        {renderRacesFront}
      </div>
    </div>
  );
}
