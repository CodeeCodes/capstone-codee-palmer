import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      <div className="nextRace" key={race.id}>
        <h3>{race.name}</h3>
        <h4>{race.local_date}</h4>
        <a href={race.link}>{race.link}</a>
      </div>
    );
  });
  console.log(races);
  return (
    <div className="races">
      {" "}
      <h2 variant="secondary" onClick={() => setShow(true)}>
        Next Races
      </h2>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Next Races</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" onChange={searchRaces} />
          {renderRacesFront}
        </Modal.Body>
      </Modal>
    </div>
  );
}
