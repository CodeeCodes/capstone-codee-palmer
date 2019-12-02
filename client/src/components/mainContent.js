import React, { useState } from "react";
import MapBoxMap from "./mapBoxMap";
import MapBox10K from "./mapBoxMap10k";
import MapBox5K from "./mapBox5K";
import { useSpring} from "react-spring";
import halfMarathon from "../assets/photos/half-marathon.jpg";
import Marathon10K from "../assets/photos/10K.jpg";
import Marathon5K from "../assets/photos/5K.jpg";
import WeatherPage from "./weatherPage";
import Comments from "./CommentsPage";
import RacesPage from "./races";
import Footer from "./footer";

export default function MainContent() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [showMarathonMap, setMarathonMap] = useState(false);
  const [showMarathonMap10K, setMarathonMap10K] = useState(false);
  const [showMarathonMap5K, setMarathonMap5K] = useState(false);
  return (
    <div className="main">
      <WeatherPage />
      <div style={props} className="main-flex">
        <div className="main__maps">
          <h4 onClick={() => setMarathonMap(!showMarathonMap)}>
            Half Marathon
          </h4>
          {showMarathonMap && <MapBoxMap />}
          <img src={halfMarathon} alt="marathon" className="main__maps-image" />
        </div>
        <div className="main__maps">
          <h4 onClick={() => setMarathonMap10K(!showMarathonMap10K)}>10 K</h4>
          {showMarathonMap10K && <MapBox10K />}
          <img src={Marathon10K} alt="marathon" className="main__maps-image" />
        </div>
        <div className="main__maps">
          <h4 onClick={() => setMarathonMap5K(!showMarathonMap5K)}>5 K</h4>
          {showMarathonMap5K && <MapBox5K />}
          <img src={Marathon5K} alt="marathon" className="main__maps-image" />
        </div>
      </div>
      <Comments />
      <RacesPage />
      <Footer />
    </div>
  );
}
