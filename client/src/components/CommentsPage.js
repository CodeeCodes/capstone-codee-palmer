import React, { useState, useEffect } from "react";
import running from "../assets/svg/running.svg";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function CommentsPage() {
  const commentsUrl = "http://localhost:5000/comments";
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);

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

  const deleteComment = async e => {
    await axios
      .delete(`${commentsUrl}/${e.target.id}`)
      .then(res => setComments([...comments, res.data]));
  };

  const newComments = async () => {
    const result = await axios.get(commentsUrl, {
      headers: { Authorization: `Bearer ${localStorage.authToken}` }
    });
    setComments(result.data);
  };

  const updateComment = e => {
    e.preventDefault();
    console.log(e.target.user.value);
    console.log(e.target.comment.value);
    axios
      .patch(`${commentsUrl}/${e.target.id}`, {
        name: e.target.user.value,
        comment: e.target.comment.value
      })
      .then(res => {
        setComments([res.data, ...comments]);
      });
  };
  useEffect(() => {
    newComments();
  }, [setComments]);

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
            {/* <p className="new__comments-date">{originalDate}</p> */}
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
                  variant="secondary"
                  onClick={() => setShow(true)}
                  className="running__page-heading"
                >
                  Update
                </p>
              </div>
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
                    id={comment._id}
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
    </div>
  );
}
