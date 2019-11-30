import React from "react";
// import FitMap from "./fitMap";
import MapBoxMap from "./mapBoxMap";
import Comments from "./CommentsPage";
import WeatherPage from "./weatherPage";
import RunningRoutes from "./runningRoutesFront";
import RacesPage from "./races";

export default function MainContent() {
  return (
    <div className="main-flex">
      <div className="main-flex-side">
        <WeatherPage />
        <Comments />
        <RacesPage />
      </div>
      <div className="main-flex-side">
        <MapBoxMap />
        <RunningRoutes />
      </div>
    </div>
  );
}
