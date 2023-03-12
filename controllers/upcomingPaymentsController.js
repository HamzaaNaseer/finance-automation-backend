const { catchAsyncError } = require("../middlewares/catchAsyncError");
const upcomingPaymentModel = require("../models/upcomingPayments");

exports.createPayment = catchAsyncError(async (req, res, next) => {
  const { organization, amount } = req.body;
  const payment = await upcomingPaymentModel.create({ organization, amount });
  return res.status(200).json({ success: true, payment });
});

exports.getUpcomingPayments = catchAsyncError(async (req, res, next) => {
  const payments = await upcomingPaymentModel.find();
  return res.status(200).json({ success: true, payments });
});
