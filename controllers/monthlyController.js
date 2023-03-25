const { catchAsyncError } = require("../middlewares/catchAsyncError");
const MonthlyModel = require("../models/MonthlySchema");

exports.addMonth = catchAsyncError(async (req, res, next) => {
  const month = await MonthlyModel.create({
    month: req.body.month,
    amount: req.body.amount,
    color: req.body.color,
  });
  return res.status(200).json({ success: true, month });
});

exports.updateMonth = catchAsyncError(async (req, res, next) => {
  await MonthlyModel.findOneAndUpdate({ month: req.body.month }, req.body);
  return res.status(200).json({ success: true });
});

exports.getAllMonths = catchAsyncError(async (req, res, next) => {
  console.log("get all called");
  const docs = await MonthlyModel.find();

  const labels = docs.map((doc) => doc.month);
  const data = docs.map((doc) => doc.amount);
  const backgroundColor = docs.map((doc) => doc.color);
  const label = "Balance";

  return res.status(200).send({
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor,
      },
    ],
  });
});
