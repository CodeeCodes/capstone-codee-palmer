import React, { useState } from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";
import Form from "./runningRoutesFront";

export default function MapBoxMap10K() {
  const [viewport, setViewport] = useState({
    latitude: 49.2827,
    longitude: -123.1207,
    zoom: 10,
    width: "100vw",
    height: "100%"
  });

  return (
    <div className="map__main">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle="mapbox://styles/codeecodes/ck3nv8pv13ddd1dqlb96r6rz6"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>
      {/* <Form /> */}
    </div>
  );
}