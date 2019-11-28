import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CommentsPage() {
  const commentsUrl = "http://localhost:5000/comments";
  const [comments, setComments] = useState([]);

  const uploadNewComment = event => {
    event.preventDefault();
    if (!event.target.name.value || !event.target.comment.value) {
      alert("Please enter all fields. Thank you!");
    } else {
      axios
        .post(commentsUrl, {
          name: event.target.name.value,
          comment: event.target.comment.value
        })
        .then(res => {
          setComments(res.data);
        });
      event.target.reset();
    }
  };
  const newComments = async () => {
    axios.get(commentsUrl).then(res => setComments(res.data));
  };
  useEffect(() => {
    newComments();
  }, []);

  let newComment;
  if (comments.length > 0) {
    newComment = comments.map(function(comment) {
      return (
        <div className="new__comment" key={comment.id}>
          <div className="new__comment-small-div">
            <h4 className="new__comment-name">{comment.name}</h4>
            <p className="new__comment-date">{comment.date}</p>
          </div>
          <p className="new__comment-text">{comment.comment}</p>
          <button className="new__comment-button-small">Delete</button>
          <button className="new__comment-button-small">Edit</button>
        </div>
      );
    });
  } else {
    return "loading...";
  }

  return (
    <div className="comments__page">
      <form
        action="/"
        method="POST"
        onSubmit={uploadNewComment}
        className="new__comments-form"
      >
        <h4 className="popUpForm__heading-small">Name</h4>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="new__comment-input"
        />
        <h4 className="popUpForm__heading-small">Comment</h4>
        <input
          type="text"
          name="comment"
          placeholder="Comment"
          className="new__comment-input"
        />
        <div>
          <button className="new__comment-button">SAVE</button>
        </div>
      </form>
      {newComment}
    </div>
  );
}