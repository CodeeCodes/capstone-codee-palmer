import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Races() {
  const runUrl = "https://api.meetup.com/VanRun/events";
  const corsURL = "https://cors-anywhere.herokuapp.com/";
  const [races, setRaces] = useState([]);
  const [show, setShow] = useState(false);
  const [searchState, setSearchState] = useState([]);

  const getRaces = () => {
    axios.get(`${corsURL}${runUrl}`).then(res => {
      setRaces(res.data);
    });
  };

  useEffect(() => {
    getRaces();
  }, []);

  function searchRaces(e) {
    let filteredRaces = races.map(race => {
      // const search = e.toLowerCase();
      // console.log(run, e.target.value);
      const searchResult =
        race.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;

      console.log(searchResult, race.name);
      return searchResult;
    });

    setSearchState([...searchState, filteredRaces]);
  }

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
        <input type="text" onChange={searchRaces} />
      </div>
      <div className="races__main">
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
  );
}
