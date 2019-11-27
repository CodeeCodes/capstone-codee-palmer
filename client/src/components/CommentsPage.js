import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CommentsPage() {
  const commentsUrl = "http://localhost:5000/comments";
  const [comments, setComments] = useState({
    comments: []
  });
  useEffect(() => {
    axios.get(commentsUrl).then(res => setComments(res.data));
  }, []);
  console.log(comments);
  let newComment;
  if (comments.length > 0) {
    newComment = comments.map(function(comment) {
      return (
        <div className="new__comment" key={comment.id}>
          <h4 className="new__comment-name">{comment.name}</h4>
          <p className="new__comment-text">{comment.comment}</p>
          <p className="new__comment-date">{comment.date}</p>
        </div>
      );
    });
  } else {
    return "loading...";
  }
  //   console.log(comments.comments);
  return <div className="comments__page">{newComment}</div>;
}
