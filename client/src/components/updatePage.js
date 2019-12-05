import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function UpdatePage() {
  const commentsUrl = "http://localhost:5000/comments";
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);

  const updateComment = event => {
    axios
      .put(commentsUrl, {
        name: event.target.user.value,
        comment: event.target.comment.value
      })
      .then(res => {
        setComments([res.data, ...comments]);
      });
  };
  return (
    <div className="update__page">
      <h6
        variant="secondary"
        onClick={() => setShow(true)}
        className="running__page-heading"
      >
        Update Comment
      </h6>
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
            action="/"
            method="PUT"
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
