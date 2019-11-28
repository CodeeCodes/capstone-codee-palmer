const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid/v4");

//create Schema

const CommentsSchema = Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  _id: {
    type: String,
    default: uuid
  },
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = Comment = mongoose.model("comment", CommentsSchema);
