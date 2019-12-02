import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Races() {
  const runUrl = "https://api.meetup.com/VanRun/events";
  const corsURL = "https://cors-anywhere.herokuapp.com/";
  const [races, setRaces] = useState([]);
  const [show, setShow] = useState(false);
  const [searchState, setSearchState] = useState({ search: "" });

  const getRaces = () => {
    axios.get(`${corsURL}${runUrl}`).then(res => {
      setRaces(res.data);
    });
  };

  useEffect(() => {
    getRaces();
  }, []);

  const searchRaces = e => {
    let filteredRaces = races.filter(race => {
      return race.name.toLowerCase().indexOf(race.name) !== -1;
    });
    setSearchState(filteredRaces);
  };

  const renderRacesFront = races.map(function(race) {
    return (
      <div className="races" key={race.id}>
        <h3>{race.name}</h3>
        <h4>{race.local_date}</h4>
        <a href={race.link}>{race.link}</a>
      </div>
    );
  });

  return (
    <div className="races__main">
      <div className="races__main">
        {" "}
        <h2
          variant="secondary"
          onClick={() => setShow(true)}
          className="races__heading"
        >
          Upcoming Races
        </h2>
        <input type="text" onChange={searchRaces} />
      </div>

      {renderRacesFront}
    </div>
  );
}
