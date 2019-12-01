const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid/v4");

//create Schema

const LoginSchema = Schema({
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = Login = mongoose.model("login", LoginSchema);
