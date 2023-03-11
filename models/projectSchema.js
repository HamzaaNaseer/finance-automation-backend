const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const projectSchema = new Schema({
  title: {
    type: String,
    required: [true, "name required"],
    minlength: [5, "name should atleast be 5 chars"],
  },
  totalBudget: {
    type: Number,
    required: [true, "please give the budget for the project"],
  },
});

module.exports = mongoose.model("Project", projectSchema);
