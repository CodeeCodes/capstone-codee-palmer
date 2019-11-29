import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function MapBoxMap() {
  const [viewport, setViewport] = useState({
    latitude: 49.2827,
    longitude: -123.1207,
    zoom: 10,
    width: "500px",
    height: "400px"
  });
  return (
    <div className="map__main">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle="mapbox://styles/codeecodes/ck3ksjpzt0hyq1dqlf5gy0vr3"
      >
        markers here
      </ReactMapGL>
    </div>
  );
}
