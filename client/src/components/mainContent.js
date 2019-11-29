import React from "react";
import FitMap from "./fitMap";
import Comments from "./CommentsPage";
import WeatherPage from "./weatherPage";
import RunningRoutes from "./runningRoutesFront";

export default function MainContent() {
  return (
    <div className="main">
      <Comments />
      <WeatherPage />
      <FitMap />
      <RunningRoutes />
    </div>
  );
}
