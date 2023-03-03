//this is our middleware for handling errors

exports.ErrorMiddleware = (err, req, res, next) => {
  console.log("Error is 🔴🔴", err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //list of errors
  //if encountered new error then
  //add the new error in condition like the one below
  //with appropriate statusCode & message
  if (err.code === 11000) {
    err.statusCode = 400;
    err.message = "Duplicate Key Error";
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
