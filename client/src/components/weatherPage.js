import React, { useState, useEffect } from "react";
import axios from "axios";
import running from "../assets/svg/running.svg";
import rain from "../assets/svg/rain.svg";
import cloudy from "../assets/svg/cloudy.svg";
import sunny from "../assets/svg/sunny.svg";
import snow from "../assets/svg/snow.svg";

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
  }, [setWeatherData]);

  const getIcon = () => {
    if (weatherData.weatherData["summary"] === "Snow") {
      return <img src={snow} alt="snow" className="weather__icons" />;
    } else if (
      weatherData.weatherData["summary"] === "Drizzle" ||
      weatherData.weatherData["summary"] === "Possible Drizzle"
    ) {
      return <img src={rain} alt="rainy" className="weather__icons" />;
    } else if (weatherData.weatherData["summary"] === "Rain") {
      return <img src={rain} alt="rainy" className="weather__icons" />;
    } else if (weatherData.weatherData["summary"] === "Sunny") {
      return <img src={sunny} alt="sunny" className="weather__icons" />;
    } else if (weatherData.weatherData["summary"] === "Overcast") {
      return <img src={cloudy} alt="cloudy" className="weather__icons" />;
    } else if (weatherData.weatherData["summary"] === "Mostly Cloudy") {
      return <img src={cloudy} alt="cloudy" className="weather__icons" />;
    } else if (weatherData.weatherData["summary"] === "Partly Cloudy") {
      return <img src={cloudy} alt="cloudy" className="weather__icons" />;
    } else return <img src={rain} alt="rainy" className="weather__icons" />;
  };
  const changeTemp = e => {
    if (e.target.innerHTML === weatherData.weatherData["temperature"]) {
      return ((weatherData.weatherData["temperature"] - 32) * 5) / 9;
    }
  };
  if (Object.keys(weatherData).length > 0) {
    return (
      <div className="weatherPage">
        <div className="weather__container">
          <h5 className="weather__temp">Temp:</h5>
          <h5 className="weather__temp" onClick={changeTemp}>
            {(((weatherData.weatherData["temperature"] - 32) * 5) / 9).toFixed(
              1
            ) +
              " " +
              "C"}
          </h5>
        </div>
        <div className="weather__container">
          <h5 className="weather__temp">Wind speed:</h5>
          <h5 className="weather__temp">
            {weatherData.weatherData["windSpeed"] + " " + "MPH"}
          </h5>
        </div>
        <div className="weather__container">
          <h5 className="weather__temp">Summary:</h5>
          <h5 className="weather__temp">
            {weatherData.weatherData["summary"]}
          </h5>
        </div>
        <div className="weather__container">
          <h5 className="weather__temp">Cloud cover:</h5>
          <h5 className="weather__temp">
            {weatherData.weatherData["cloudCover"]}
          </h5>
        </div>
        <div className="weather__icons-div">{getIcon()}</div>
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
