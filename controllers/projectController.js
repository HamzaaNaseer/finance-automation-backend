const { catchAsyncError } = require("../middlewares/catchAsyncError");
const ProjectModel = require("../models/projectSchema");

exports.createProject = catchAsyncError(async (req, res, next) => {
  const { title, totalBudget } = req.body;
  const project = await ProjectModel.create({ title, totalBudget });
  return res.status(200).json({ success: true, project });
});

exports.getProject = catchAsyncError(async (req, res, next) => {
  const project = await ProjectModel.find();
  return res.status(200).json({ success: true, project: project[0] });
});
