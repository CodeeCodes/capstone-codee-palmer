const express = require("express");
const router = express.Router();
const cors = require("cors");
const helper = require("../../helper/helper");
router.use(cors());
const uuid = require("uuid");
const app = express();
const verify = require("../jwtAuth");

// / Initialize Files, File Data
const commentsData = `${__dirname}` + "/model/comments.js";
let Comment = require(commentsData);

app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  // console.log(req.headers);
  try {
    Comment.find()
      .sort({ date: -1 })
      .then(comments => res.json(comments));
  } catch (er) {
    console.log("Error fetching data", er);
    res.json(500).send(er);
  }
});
router.post("/", (req, res) => {
  const newComments = new Comment({
    name: req.body.name,
    comment: req.body.comment
  });

  newComments.save().then(comment => res.json(comment));
});
router.delete("/:id", (req, res) => {
  Comment.findById({ _id: req.params.id }).then(comment => {
    comment.remove().then(er => {
      Comment.find()
        .sort({ date: -1 })
        .then(comments => res.json(comments));
    });
  });
});

router.patch("/:id", (req, res) => {
  Comment.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name, comment: req.body.comment } },
    { new: true },
    function(err, res) {
      if (err) {
        console.log(err);
        res.json({ msg: "database failure" });
      }
    }
  );
  console.log("this is the response" + res);
});
module.exports = router;
