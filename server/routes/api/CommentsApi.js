const express = require("express");
const router = express.Router();
const cors = require("cors");
const helper = require("../../helper/helper");
router.use(cors());
const uuid = require("uuid");
const app = express();

// / Initialize Files, File Data
const commentsData = `${__dirname}` + "/model/comments.json";
let comments = require(commentsData);

app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json(comments);
});
router.post("/", (req, res) => {
  const newComments = {
    id: uuid(),
    date: new Date().toLocaleDateString(),
    name: req.body.name,
    comment: req.body.comment
  };
  comments.push(newComments);
  helper.writeJSONFile(commentsData, comments);
  res.json(comments);
});
module.exports = router;
