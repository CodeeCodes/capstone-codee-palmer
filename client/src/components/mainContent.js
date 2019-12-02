import React from "react";
import MapBoxMap from "./mapBoxMap";
import { useSpring, animated } from "react-spring";
import WeatherPage from "./weatherPage";
import Comments from "./CommentsPage";

export default function MainContent() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div className="main">
      <animated.div style={props}>
        <WeatherPage />
      </animated.div>
      <animated.div style={props} className="main-flex">
        <MapBoxMap />
        <Comments />
      </animated.div>
    </div>
  );
}
