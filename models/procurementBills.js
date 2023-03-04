const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const procurementBillsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Procurement", procurementBillsSchema);
