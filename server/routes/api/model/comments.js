const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema

const CommentsSchema = Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

module.exports = Comment = mongoose.model("comment", CommentsSchema);
