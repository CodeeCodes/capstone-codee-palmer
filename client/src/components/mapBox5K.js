import React, { useState } from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";
import RunningRoutes from "./runningRoutesFront";

export default function MapBoxMap5K() {
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
        mapStyle="mapbox://styles/codeecodes/ck3oq3t3b0e511cqzuvltist2"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>
      <RunningRoutes />
    </div>
  );
}
