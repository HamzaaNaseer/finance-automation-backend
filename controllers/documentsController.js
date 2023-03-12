const { catchAsyncError } = require("../middlewares/catchAsyncError");
const DocModel = require("../models/documentsSchema");

exports.addDoc = catchAsyncError(async (req, res, next) => {
  const link = `/documents/${req.file.filename}`;

  const doc = await DocModel.create({ link });
  return res.status(200).json({ success: true, doc });
});

exports.getAllDocs = catchAsyncError(async (req, res, next) => {
  const docs = await DocModel.find();
  return res.status(200).json({ success: true, docs });
});
