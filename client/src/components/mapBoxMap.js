import React, { useState } from "react";
import ReactMapGL, {
  Marker,
  Source,
  Layer,
  GeolocateControl
} from "react-map-gl";
import data from "../assets/geoJson/morning_run.geojson";

export default function MapBoxMap() {
  const [data, setData] = useState([]);
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
        mapStyle="mapbox://styles/codeecodes/ck3nm0uki20121cp91l1iwoib"
      >
        {/* <Source type="geojson" data={data}>
          <Layer />
        </Source> */}
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>
    </div>
  );
}
