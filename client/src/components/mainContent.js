import React from "react";
import FitMap from "./fitMap";
import Comments from "./CommentsPage";
import WeatherPage from "./weatherPage";

export default function MainContent() {
  return (
    <div className="main">
      <Comments />
      <WeatherPage />
    </div>
  );
}
