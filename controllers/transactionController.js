const { catchAsyncError } = require("../middlewares/catchAsyncError");
const TransactionModel = require("../models/transactionsSchema");

exports.createTransaction = catchAsyncError(async (req, res, next) => {
  const { organizationName, amount, description } = req.body;
  const transaction = await TransactionModel.create({
    organizationName,
    amount,
    description,
  });
  return res.status(200).json({ success: true, transaction });
});

exports.getAllTransactions = catchAsyncError(async (req, res, next) => {
  const transactions = await TransactionModel.find();
  return res.status(200).json({ success: true, transactions });
});
