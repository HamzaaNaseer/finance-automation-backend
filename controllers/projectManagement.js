const { catchAsyncError } = require("../middlewares/catchAsyncError");

const UpcomingModel = require("../models/upcomingPayments");
const ProcurementModel = require("../models/procurementBills");

exports.projectManagement = catchAsyncError(async (req, res, next) => {
  const upcomingPayments = await UpcomingModel.find();
  const procurement = await ProcurementModel.find();

  return res.status(200).json({ upcomingPayments, procurement });
});
