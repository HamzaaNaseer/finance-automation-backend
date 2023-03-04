const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const transactionsSchema = new Schema({
  organizationName: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transactions", transactionsSchema);
