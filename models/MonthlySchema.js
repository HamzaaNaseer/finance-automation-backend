const mongoose = require("mongoose");
const { Schema } = mongoose;
const montly = new Schema({
  month: {
    type: String,
  },
  amount: {
    type: Number,
  },
  color: {
    type: String,
  },
});

module.exports = mongoose.model("Monthly", montly);
