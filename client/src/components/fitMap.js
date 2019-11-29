import React, { useEffect } from "react";
// import axios from "axios";
import GoogleMapsStyles from "../styles/partials/googleMapsStyles.json";
import runningIcon from "../assets/iconRunning.png";

export default function FitMap() {
  const stylesArray = GoogleMapsStyles;
  // const [cords, setCords] = useState({
  //   cords: []
  // });
  // const cors = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    renderMap();
    // renderRuns();
  });
  // const renderRuns = () => {
  //   const getRunsUrl = `http://www.RunReg.com/api/search?`;
  //   const renderRuns = axios.get(getRunsUrl).then(res => {
  //     console.log(res);
  //   });
  // };

  const renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB0ebv97Ph2LJRAvh9fO6Sd3F7gVxGp1ss&callback=initMap"
    );
    window.initMap = initMap;
  };

  const initMap = () => {
    const map = new window.google.maps.Map(document.querySelector(".map"), {
      center: { lat: 49.2827, lng: -123.1207 },
      zoom: 12,
      styles: stylesArray
    });
    let infowindow = new window.google.maps.InfoWindow({
      content: "Start your run"
    });
    let marker = new window.google.maps.Marker({
      position: { lat: 49.2827, lng: -123.1207 },
      map: map,
      title: "Hello Vancouver",
      icon: runningIcon
    });
    marker.addListener("click", function() {
      infowindow.open(map, marker);
    });
    let infowindowTwo = new window.google.maps.InfoWindow({
      content: "End your run"
    });
    let markerTwo = new window.google.maps.Marker({
      position: { lat: 49.304, lng: -123.1568 },
      map: map,
      title: "Hello Vancouver",
      icon: runningIcon
    });
    marker.addListener("click", function() {
      infowindowTwo.open(map, markerTwo);
    });
  };

  return (
    <div className="map__main">
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
