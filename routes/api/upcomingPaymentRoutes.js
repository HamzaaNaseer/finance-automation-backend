const express = require("express");
const {
  createPayment,
  getUpcomingPayments,
} = require("../../controllers/upcomingPaymentsController");

const { auth } = require("../../middlewares/auth");
const router = express.Router();

router.post("/create", auth, createPayment);
router.get("/get", auth, getUpcomingPayments);

module.exports = router;
