const express = require("express");
const {
  piechart,
  moduleFinances,
} = require("../../controllers/chartsController");

const { auth } = require("../../middlewares/auth");
const router = express.Router();

router.get("/pie", auth, piechart);
router.get("/pie-finance", auth, moduleFinances);

module.exports = router;
