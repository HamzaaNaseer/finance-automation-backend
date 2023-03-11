const express = require("express");
const {
  createProject,
  getProject,
} = require("../../controllers/projectController");
const { auth } = require("../../middlewares/auth");
const router = express.Router();

router.post("/create", createProject);
router.get("/get", auth, getProject);

module.exports = router;
