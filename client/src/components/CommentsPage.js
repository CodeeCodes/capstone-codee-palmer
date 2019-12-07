import React, { useState, useEffect } from "react";
import running from "../assets/svg/running.svg";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function CommentsPage() {
  const commentsUrl = "http://localhost:5000/comments";
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const uploadNewComment = event => {
    event.preventDefault();
    axios
      .post(commentsUrl, {
        name: event.target.user.value,
        comment: event.target.comment.value
      })
      .then(res => {
        setComments([res.data, ...comments]);
      });
    event.target.reset();
  };

  const deleteComment = e => {
    console.log(e.target.id);
    axios.delete(`${commentsUrl}/${e.target.id}`).then(res => {
      newComments();
    });
  };

  const newComments = async () => {
    const result = await axios.get(commentsUrl, {
      headers: { Authorization: `Bearer ${localStorage.authToken}` }
    });
    setComments(result.data);
  };

  const updateComment = e => {
    // e.preventDefault();
    axios
      .patch(`${commentsUrl}/${e.target.id}`, {
        name: e.target.user.value,
        comment: e.target.comment.value
      })
      .then(res => newComments());
  };

  useEffect(() => {
    newComments();
  }, [setComments]);

  let newComment;
  if (comments.length >= 0) {
    newComment = comments.map(function(comment) {
      let timeStamp = comment.date;
      let newDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).format(timeStamp);

      return (
        <div className="new__comments" key={comment._id}>
          <div className="new__comments-small-div">
            <h4 className="new__comments-name">{comment.name}</h4>
            <p className="new__comments-date">{newDate}</p>
          </div>
          <p className="new__comments-text">{comment.comment}</p>
          <div className="new__comments-button-flex">
            <button
              id={comment._id}
              className="new__comments-button-small"
              onClick={deleteComment}
            >
              Delete
            </button>
            <div className="new__comments-button-small">
              <div className="update__page">
                <p
                  id={comment._id}
                  variant="secondary"
                  onClick={() => {
                    setId(comment._id);
                    setShow(true);
                  }}
                  className="running__page-heading"
                >
                  Update
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return (
      <div className="front__page-div-One">
        <img className="front__page-div-One-image" src={running} alt="" />
      </div>
    );
  }

  return (
    <div className="comments__page">
      <h3 className="new__comments-heading">Chatboard</h3>
      <form
        action="/"
        method="POST"
        onSubmit={uploadNewComment}
        className="new__comments-form"
      >
        <h4 className="new__comments-heading-small">Name</h4>
        <input
          type="text"
          name="user"
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
      <div className="comments__page-comments">{newComment}</div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id={id}
            action="/"
            method="PATCH"
            onSubmit={updateComment}
            className="new__comments-form"
          >
            <h4 className="new__comments-heading-small">Name</h4>
            <input
              type="text"
              name="user"
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
        </Modal.Body>
      </Modal>
    </div>
  );
}
