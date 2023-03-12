const { catchAsyncError } = require("../middlewares/catchAsyncError");
const ProcurementModel = require("../models/procurementBills");

exports.createProcurement = catchAsyncError(async (req, res, next) => {
  const { title, amount } = req.body;
  const procurement = await ProcurementModel.create({ title, amount });
  return res.status(200).json({ success: true, procurement });
});

exports.getProcurements = catchAsyncError(async (req, res, next) => {
  const procurements = await ProcurementModel.find();
  return res.status(200).json({ success: true, project: procurements });
});
