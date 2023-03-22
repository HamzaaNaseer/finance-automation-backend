const { catchAsyncError } = require("../middlewares/catchAsyncError");

const TransactionModel = require("../models/transactionsSchema");

exports.financialManagement = catchAsyncError(async (req, res, next) => {
  const transactions = await TransactionModel.find();

  return res.status(200).json({ transactions });
});
