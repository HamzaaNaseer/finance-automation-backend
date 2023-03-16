const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const documents = new Schema({
  link: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Documents", documents);
