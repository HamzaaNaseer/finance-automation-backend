const { catchAsyncError } = require("../middlewares/catchAsyncError");
const { ErrorMiddleware } = require("../middlewares/Error");
const UserModel = require("../models/userSchema");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");

exports.login = catchAsyncError(async (req, res, next) => {
  console.log("login called");
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email, password });
  if (!user) {
    return next(new ErrorHandler("incorrect credentials", 400));
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  return res
    .set({ "Access-Control-Expose-Headers": "auth-token" })
    .header("auth-token", token)
    .send(user);
});

exports.signUp = catchAsyncError(async (req, res, next) => {
  console.log("signup called");
  const { name, email, password, role } = req.body;

  const user = await UserModel.create({ name, email, password, role });
  if (!user) {
    return next(new ErrorHandler("Incorrect Details!", 400));
  }
  return res
    .status(200)
    .json({ success: true, message: "Successfully Registered" });
});
