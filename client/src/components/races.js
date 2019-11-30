import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Races() {
  const runUrl = "http://www.RunReg.com/api/search?region=northwest";
  const corsURL = "https://cors-anywhere.herokuapp.com/";
  const [races, setRaces] = useState([]);

  const getRaces = () => {
    axios.get(`${corsURL}${runUrl}`).then(res => {
      console.log(res);
      setRaces(res.data);
    });
  };

  useEffect(() => {
    getRaces();
  }, []);

  console.log(races);
  return <div className="races"></div>;
}
