const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid/v4");

//create Schema

const RoutesSchema = Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: false
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

module.exports = Routes = mongoose.model("Routes", RoutesSchema);
