const express = require("express");
const {
  createProcurement,
  getProcurements,
} = require("../../controllers/procurementsController");

const { auth } = require("../../middlewares/auth");
const router = express.Router();

router.post("/create", auth, createProcurement);
router.get("/get", auth, getProcurements);

module.exports = router;
