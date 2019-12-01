const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid/v4");

//create Schema

const AuthSchema = Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
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

module.exports = Auth = mongoose.model("auth", AuthSchema);
