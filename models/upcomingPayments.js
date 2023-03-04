const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const upcomingPayments = new Schema({
  organization: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UpcomingPayments", upcomingPayments);
