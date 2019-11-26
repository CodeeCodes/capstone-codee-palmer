import React, { useState } from "react";
import FitMap from "./FitMap";

export default function MainContent() {
  const [comments, setComments] = useState({
    comments: []
  });

  return (
    <div className="main">
      <FitMap />
    </div>
  );
}
