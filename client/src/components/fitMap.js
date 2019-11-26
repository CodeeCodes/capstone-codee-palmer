import React, { useState, useEffect } from "react";
import GoogleMapsStyles from "../styles/partials/googleMapsStyles.json";
export default function FitMap() {
  const stylesArray = GoogleMapsStyles;
  const [cords, setCords] = useState({
    lat: 49.2827,
    lng: 123.1207
  });

  useEffect(() => {
    renderMap();
  });

  const renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB0ebv97Ph2LJRAvh9fO6Sd3F7gVxGp1ss&callback=initMap"
    );
    window.initMap = initMap;
  };
  const initMap = () => {
    const map = new window.google.maps.Map(document.querySelector(".map"), {
      center: { lat: 49.2827, lng: -123.1207 },
      zoom: 13,
      styles: stylesArray
    });
  };

  return (
    <div className="map__main">
      {" "}
      <div className="map"></div>
    </div>
  );
  function loadScript(Url) {
    let index = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = Url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }
}
