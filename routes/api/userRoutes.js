const express = require("express");
const { login, signUp } = require("../../controllers/userController");
const { auth } = require("../../middlewares/auth");
const router = express.Router();



router.post("/sign-in", login);
router.post("/sign-up", signUp);

module.exports = router;
