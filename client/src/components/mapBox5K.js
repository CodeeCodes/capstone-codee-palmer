import React, { useState } from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";

export default function MapBoxMap5K() {
  const [viewport, setViewport] = useState({
    latitude: 49.29875,
    longitude: -123.1204,
    zoom: 13,
    width: "100%",
    height: "100%"
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
    </div>
  );
}
