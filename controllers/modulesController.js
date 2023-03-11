const { catchAsyncError } = require("../middlewares/catchAsyncError");
const ModuleModel = require("../models/modulesSchema");
const ErrorHandler = require("../utils/errorHandler");

exports.createModule = catchAsyncError(async (req, res, next) => {
  const { title, financeGiven, financeConsumed, progress, project } = req.body;

  const module = await ModuleModel.create({
    title,
    financeGiven,
    financeConsumed,
    progress,
    project,
  });
  if (!module) return new ErrorHandler("some error occured", 400);
  return res.status(200).json({ success: true, module });
});

exports.getAllModules = catchAsyncError(async (req, res, next) => {
  const modules = await ModuleModel.find();
  return res.status(200).json({ success: true, modules });
});
