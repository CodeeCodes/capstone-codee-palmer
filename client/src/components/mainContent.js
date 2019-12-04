import React, { useState } from "react";
import MapBoxMap from "./mapBoxMap";
import MapBox10K from "./mapBoxMap10k";
import MapBox5K from "./mapBox5K";
import RunningRoutes from "./runningRoutesFront";
import halfMarathon from "../assets/photos/marathon.jpg";
import runningMain from "../assets/svg/runningMain.svg";
import Marathon10K from "../assets/photos/10K.jpg";
import Marathon5K from "../assets/photos/5K.jpg";
import WeatherPage from "./weatherPage";
import Comments from "./CommentsPage";
import RacesPage from "./races";
import Footer from "./footer";

export default function MainContent() {
  const [showMarathonMap, setMarathonMap] = useState(false);
  const [showMarathonMap10K, setMarathonMap10K] = useState(false);
  const [showMarathonMap5K, setMarathonMap5K] = useState(false);

  const changeMapClass = () => {
    var image = document.querySelector(".main__maps-image");
    if ((image.style.display = "block")) {
      image.style.display = "none";
    } else if ((image.style.display = "none")) {
      image.style.display = "block";
    }
  };

  return (
    <div className="main">
      <WeatherPage />
      <div className="main-flex-top">
        <div
          className="main__maps"
          onClick={() => setMarathonMap(!showMarathonMap)}
        >
          <h4>Half Marathon</h4>
          {showMarathonMap && <MapBoxMap />}
          <img
            src={halfMarathon}
            alt="marathon"
            className="main__maps-image"
            onClick={changeMapClass}
          />
        </div>
        <div
          className="main__maps"
          onClick={() => setMarathonMap10K(!showMarathonMap10K)}
        >
          <h4>10 K</h4>
          {showMarathonMap10K && <MapBox10K />}
          <img src={Marathon10K} alt="marathon" className="main__maps-image" />
        </div>
        <div
          className="main__maps"
          onClick={() => setMarathonMap5K(!showMarathonMap5K)}
        >
          <h4>5 K</h4>
          {showMarathonMap5K && <MapBox5K />}
          <img src={Marathon5K} alt="marathon" className="main__maps-image" />
        </div>
        <RunningRoutes />
      </div>
      <div className="main-flex">
        <Comments />
        <RacesPage />
        <div className="comments__page-image-div">
          <img className="comments__page-image" src={runningMain} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
