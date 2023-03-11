const jwt = require("jsonwebtoken");
const UserModel = require("../models/userSchema")
exports.auth = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send("Access Denied");
  }
  try {
    const verification = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verification;
    req.user = await UserModel.findById(verification._id);
    next();
  } catch (err) {
    return res.status(400).send("Invalid Token");
  }
};
