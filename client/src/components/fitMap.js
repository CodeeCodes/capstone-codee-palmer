import React, { useState } from "react";

export default function FitMap() {
  const [cords, setCords] = useState({
    lat: 49.2827,
    lng: 123.1207
  });
  return <div className="map"></div>;
}
