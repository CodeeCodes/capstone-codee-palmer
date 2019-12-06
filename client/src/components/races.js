import React, { useState, useEffect } from "react";
import axios from "axios";
import meetUpLogo from "../assets/svg/meetup-vector-logo.svg";

export default function Races() {
  const runUrl = "https://api.meetup.com/VanRun/events";
  const corsURL = "https://cors-anywhere.herokuapp.com/";
  const [races, setRaces] = useState([]);
  const [racesTwo, setRacesTwo] = useState([]);

  const getRaces = async () => {
    await axios.get(`${corsURL}${runUrl}`).then(res => {
      const races = res.data;

      setRaces(
        races.map(function(race) {
          return (
            <div className="races" key={race.id}>
              <h3 className="races__text">{race.name}</h3>
              <h4 className="races__text">{race.local_date}</h4>
              <a href={race.link}>
                <img
                  src={meetUpLogo}
                  alt="meetup logo"
                  className="races__main-logo"
                />
              </a>
            </div>
          );
        })
      );
      setRacesTwo(
        races.map(function(race) {
          return (
            <div className="races" key={race.id}>
              <h3 className="races__text">{race.name}</h3>
              <h4 className="races__text">{race.local_date}</h4>
              <a href={race.link}>
                <img
                  src={meetUpLogo}
                  alt="meetup logo"
                  className="races__main-logo"
                />
              </a>
            </div>
          );
        })
      );
    });
  };

  function searchRaces(e) {
    e.preventDefault();
    e.persist();
    const input = e.target.raceSearch.value;

    const searchResult = racesTwo.filter(obj =>
      obj.props.children[0].props.children
        .toLowerCase()
        .includes(input.toLowerCase())
    );
    setRaces([searchResult]);
    e.target.reset();
  }

  useEffect(() => {
    getRaces();
  }, [setRaces]);
  useEffect(() => {
    getRaces();
  }, []);

  return (
    <div className="races-main">
      {" "}
      <h2 className="races__main-heading">Upcoming Races</h2>
      <form className="races__search" onSubmit={searchRaces}>
        <input type="text" name="raceSearch" className="races__search-input" />
      </form>
      <div className="races__main">
        <div className="races">{races}</div>
      </div>
    </div>
  );
}
