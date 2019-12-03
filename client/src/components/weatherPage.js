import React, { useState, useEffect } from "react";
import axios from "axios";
import running from "../assets/svg/running.svg";

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState([]);

  const corsURL = "https://cors-anywhere.herokuapp.com/";
  const weatherURL = (lat, lng) =>
    `${corsURL}https://api.darksky.net/forecast/45f4eaf8bb473b0602fe8cc6c0c66379/${lat},${lng}`;

  const getWeather = async () => {
    await axios.get(weatherURL(49.304, -123.1568)).then(res => {
      setWeatherData({ weatherData: res.data.currently });
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  if (Object.keys(weatherData).length > 0) {
    return (
      <div className="weatherPage">
        <div>
          <h5 className="weather__temp">Temp:</h5>
          <h5 className="weather__temp">
            {weatherData.weatherData["temperature"]}
          </h5>
        </div>
        <div>
          <h5 className="weather__temp">Wind speed:</h5>
          <h5 className="weather__temp">
            {weatherData.weatherData["windSpeed"]}
          </h5>
        </div>
        <div>
          <h5 className="weather__temp">Summary:</h5>
          <h5 className="weather__temp">
            {weatherData.weatherData["summary"]}
          </h5>
        </div>
        <div>
          <h5 className="weather__temp">Cloud cover:</h5>
          <h5 className="weather__temp">
            {weatherData.weatherData["cloudCover"]}
          </h5>
        </div>
        <div>
          <h5 className="weather__temp">Temp:</h5>
          <h5 className="weather__temp">
            {weatherData.weatherData["pressure"]}
          </h5>
        </div>
      </div>
    );
  } else {
    return (
      <div className="front__page-div-One">
        <img className="front__page-div-One-image" src={running} alt="" />
      </div>
    );
  }
}
