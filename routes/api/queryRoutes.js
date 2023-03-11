const express = require("express");
const {
  createQuery,
  getAllQueries,
  addComment,
} = require("../../controllers/queryController");
const { auth } = require("../../middlewares/auth");
const router = express.Router();

router.post("/create", auth, createQuery);
router.get("/get", auth, getAllQueries);
router.patch("/update/:id", auth, addComment);

module.exports = router;
