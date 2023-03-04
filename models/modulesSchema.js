const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const modulesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  financeGiven: {
    type: Number,
    required: true,
  },
  financeConsumed: {
    type: Number,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
    default: 0,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
});

module.exports = mongoose.model("Modules", modulesSchema);
