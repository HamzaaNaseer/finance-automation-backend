const express = require("express");
const {
  createModule,
  getAllModules,
} = require("../../controllers/modulesController");

const { auth } = require("../../middlewares/auth");
const router = express.Router();

router.post("/create", auth, createModule);
router.get("/get", auth, getAllModules);

module.exports = router;
