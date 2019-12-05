import React from "react";
import MapBoxMap from "./mapBoxMap";
import MapBox10K from "./mapBoxMap10k";
import MapBox5K from "./mapBox5K";
import RunningRoutes from "./runningRoutesFront";
import runningMain from "../assets/svg/runningMain.svg";
import WeatherPage from "./weatherPage";
import Comments from "./CommentsPage";
import RacesPage from "./races";
import Footer from "./footer";

export default function MainContent() {
  return (
    <div className="main">
      <WeatherPage />
      <div className="main-flex-top">
        <div className="main__maps">
          <h4>Half Marathon</h4>
          <MapBoxMap />
        </div>
        <div className="main__maps">
          <h4>10 K</h4>
          <MapBox10K />
        </div>
        <div className="main__maps">
          <h4>5 K</h4>
          <MapBox5K />
        </div>
      </div>
      <div className="main__race-flex">
        <RunningRoutes />
      </div>
      <div className="main-flex">
        <Comments />

        <RacesPage />
        <div className="comments__page-image-div">
          <img src={runningMain} alt="" className="comments__page-image" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
