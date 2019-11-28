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
  Comment.find()
    .sort({ date: -1 })
    .then(comments => res.json(comments));
});
router.post("/", (req, res) => {
  const newComments = new Comment({
    id: uuid(),
    date: new Date().toLocaleDateString(),
    name: req.body.name,
    comment: req.body.comment
  });

  newComments.save().then(comment => res.json(comment));
  // Comment.push(newComments);
  // helper.writeJSONFile(commentsData, Comment);
  // res.json(Comment);
});
module.exports = router;
