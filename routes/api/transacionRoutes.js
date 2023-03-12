const express = require("express");
const {
  createTransaction,
  getAllTransactions,
} = require("../../controllers/transactionController");

const { auth } = require("../../middlewares/auth");
const router = express.Router();

router.post("/create", auth, createTransaction);
router.get("/get", auth, getAllTransactions);

module.exports = router;
