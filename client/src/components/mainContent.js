import React from "react";
import MapBoxMap from "./mapBoxMap";

import WeatherPage from "./weatherPage";
import RunningRoutes from "./runningRoutesFront";

export default function MainContent() {
  return (
    <div className="main">
      <WeatherPage />
      <div className="main-flex">
        <MapBoxMap />
        <RunningRoutes />
      </div>
    </div>
  );
}
