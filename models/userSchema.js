const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const userModel = new Schema({
  name: {
    type: String,
    required: [true, "name required"],
    minlength: [5, "name should atleast be 5 chars"],
    maxlength: [30, "name should not exceed 30 chars "],
  },
  email: {
    type: String,
    required: [true, " email is required "], //checks can be added at front-end
    unique: true,
    validate: [validator.isEmail, "invalid email"],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minlength: [8, "password should be atleast 8 characters"],
  },
  role: {
    type: String,
    enum: ["DONER","DONEE"],
    required: true,
  },
});

module.exports = mongoose.model("User", userModel);
