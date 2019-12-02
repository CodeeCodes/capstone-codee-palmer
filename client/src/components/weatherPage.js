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
      <div>
        <div className="weatherPage">
          <div>
            <h3 className="weather__temp">
              {weatherData.weatherData["temperature"]}
            </h3>
          </div>
          <div>
            <h3 className="weather__temp">
              {weatherData.weatherData["windSpeed"]}
            </h3>
          </div>
          <div>
            <h3 className="weather__temp">
              {weatherData.weatherData["summary"]}
            </h3>
          </div>
          <div>
            <h3 className="weather__temp">
              {weatherData.weatherData["cloudCover"]}
            </h3>
          </div>
          <div>
            <h3 className="weather__temp">
              {weatherData.weatherData["pressure"]}
            </h3>
          </div>
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
