const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const querySchema = new Schema({
  subject: {
    type: String,
    required: [true, "name required"],
    minlength: [5, "name should atleast be 5 chars"],
  },
  comments: [
    {
      commented_by: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      description: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Query", querySchema);
