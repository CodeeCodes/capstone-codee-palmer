import React from "react";
import FitMap from "./fitMap";
import Comments from "./CommentsPage";

export default function MainContent() {
  return (
    <div className="main">
      <FitMap />
      <Comments />
    </div>
  );
}
