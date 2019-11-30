const express = require("express");
const router = express.Router();
const cors = require("cors");
const helper = require("../../helper/helper");
router.use(cors());
const uuid = require("uuid");
const app = express();

// / Initialize Files, File Data
const commentsData = `${__dirname}` + "/model/comments.js";
let Comment = require(commentsData);

app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  try {
    Comment.find()
      .sort({ date: 1 })
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
  console.log(req.params.id);
  Comment.findById(req.params.id).then(comment =>
    comment
      .remove()
      .then(() => res.json({ success: true }))
      .catch(er => res.status(404).json({ success: false }))
  );
});
module.exports = router;
