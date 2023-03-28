const { catchAsyncError } = require("../middlewares/catchAsyncError");
const DocModel = require("../models/documentsSchema");

exports.addDoc = catchAsyncError(async (req, res, next) => {
  console.log("file is ", req.file);
  const link = `/documents/${req.file.filename}`;

  const doc = await DocModel.create({
    link,
    name: req.file.originalname,
    postedBy: req.user._id,
  });
  return res.status(200).json({ success: true, doc });
});

exports.getAllDocs = catchAsyncError(async (req, res, next) => {
  const docs = await DocModel.find();
  return res.status(200).json({ success: true, docs });
});

exports.deleteDoc = catchAsyncError(async (req, res, next) => {
  await DocModel.findByIdAndDelete(req.params.id);
  return res.status(200).json({ success: true });
});

exports.updateFinancesDoc = catchAsyncError(async (req, res, next) => {
  console.log("update finances caled")
  const link = `/documents/${req.file.filename}`;

  await DocModel.findOneAndUpdate({ name: req.params.name }, { link });
  return res.status(200).json({ success: true });
});

exports.getFinancesDoc = catchAsyncError(async (req, res, next) => {
  const doc = await DocModel.find({ name: "finances" });
  return res.status(200).json({ success: true, doc });
});

exports.getTeamTransfferedDocs = catchAsyncError(async (req, res, next) => {
  const doc = await DocModel.find({ name: { $in: ["transferred", "team"] } });
  return res.status(200).json({ success: true, doc });
});

exports.deleteName = catchAsyncError(async (req, res, next) => {
  await DocModel.findOneAndDelete({ name: req.params.name });
  return res.status(200).json({ success: true });
});
