import React, { useState } from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";

export default function MapBoxMap() {
  const [viewport, setViewport] = useState({
    latitude: 49.2827,
    longitude: -123.1207,
    zoom: 11.8,
    width: "100vw",
    height: "100%"
  });

  return (
    <div className="map__main-marathon">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle="mapbox://styles/codeecodes/ck3nvfq1b1uk31cqr1lxx8dmf"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>
    </div>
  );
}
