import React, { useState } from "react";
import FitMap from "./fitMap";

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
