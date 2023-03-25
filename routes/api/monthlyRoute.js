const express = require("express");
const {
  addMonth,
  updateMonth,
  getAllMonths,
} = require("../../controllers/monthlyController");

const { auth } = require("../../middlewares/auth");
const router = express.Router();

router.post("/add", addMonth);
router.patch("/update", updateMonth);
router.get("/get",getAllMonths)

module.exports = router;
