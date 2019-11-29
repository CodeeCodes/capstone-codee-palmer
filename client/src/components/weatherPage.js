import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState([]);

  const corsURL = "https://cors-anywhere.herokuapp.com/";
  const weatherURL = (lat, lng) =>
    `${corsURL}https://api.darksky.net/forecast/45f4eaf8bb473b0602fe8cc6c0c66379/${lat},${lng}`;

  const getWeather = async () => {
    await axios.get(weatherURL(49.304, -123.1568)).then(res => {
      setWeatherData({ weatherData: res.data.currently, loading: false });
    });
  };

  useEffect(() => {
    getWeather();
  }, []);
  console.log(weatherData);

  return (
    <div className="weatherPage">
      <h1 className="weather__temp">
        {weatherData.temperature && weatherData.temperature}
      </h1>
    </div>
  );
}
