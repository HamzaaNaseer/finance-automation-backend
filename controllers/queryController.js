const { catchAsyncError } = require("../middlewares/catchAsyncError");
const QueryModel = require("../models/querySchema");
const ErrorHandler = require("../utils/errorHandler");

exports.createQuery = catchAsyncError(async (req, res, next) => {
  const { subject } = req.body;
  const createdBy = req.user._id;

  await QueryModel.create({ subject, createdBy });

  return res
    .status(200)
    .json({ success: true, message: "query created successfully" });
});

exports.getAllQueries = catchAsyncError(async (req, res, next) => {
  const queries = await QueryModel.find().populate('createdBy');

  return res.status(200).json({ success: true, queries });
});

exports.addComment = catchAsyncError(async (req, res, next) => {
  const query = await QueryModel.findById(req.params.id);
  const { newComment } = req.body;
  newComment.commented_by = req.user._id;
  if (!query) return next(new ErrorHandler("query not found", 400));

  const comments = [...query.comments, newComment];

  await QueryModel.findByIdAndUpdate(query._id, {
    comments,
  });

  return res
    .status(200)
    .json({ success: true, message: "comment added successfully" });
});
