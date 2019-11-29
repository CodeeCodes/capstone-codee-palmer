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
  // console.log(comments);

  const deleteComment = async e => {
    await axios
      .delete(`${commentsUrl}/${e.target.id}`)
      .then(res => setComments(res.data));
  };
  const newComments = async () => {
    await axios.get(commentsUrl).then(res => setComments(res.data));
  };
  useEffect(() => {
    newComments();
  }, []);
  const useForceUpdate = () => useState()[1];

  const forceUpdate = useForceUpdate();
  const onClick = () => {
    // forceUpdate();
    deleteComment();
  };

  let newComment;
  if (comments.length >= 0) {
    newComment = comments.map(function(comment) {
      // let timeStamp = comment.date;
      // let toDate = new Date(timeStamp).getDate();
      // let toMonth = new Date(timeStamp).getMonth() + 1;
      // let toYear = new Date(timeStamp).getFullYear();
      // let originalDate = toMonth + "/" + toDate + "/" + toYear;

      return (
        <div className="new__comments" key={comment._id}>
          <div className="new__comments-small-div">
            <h4 className="new__comments-name">{comment.name}</h4>
            <p className="new__comments-date">{comment.date}</p>
          </div>
          <p className="new__comments-text">{comment.comment}</p>
          <button
            id={comment._id}
            className="new__comments-button-small"
            onClick={deleteComment}
          >
            Delete
          </button>
          <button className="new__comments-button-small">Edit</button>
        </div>
      );
    });
  } else {
    return "loading...";
  }
  // console.log();
  return (
    <div className="comments__page">
      {newComment}
      <form
        action="/"
        method="POST"
        onSubmit={uploadNewComment}
        className="new__comments-form"
      >
        <h4 className="new__comments-heading-small">Name</h4>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="new__comments-input-name"
        />
        <h4 className="new__comments-heading-small">Comment</h4>
        <input
          type="text"
          name="comment"
          placeholder="Comment"
          className="new__comments-input"
        />
        <div className="new__comments-button-div">
          <button className="new__comments-button">SAVE</button>
        </div>
      </form>
    </div>
  );
}
