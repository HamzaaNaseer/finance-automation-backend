const express = require("express");
const { addDoc, getAllDocs } = require("../../controllers/documentsController");

const { auth } = require("../../middlewares/auth");
const docsUploader = require("../../middlewares/docsUploader");
const router = express.Router();

router.post("/add",  docsUploader.single("doc"), addDoc);
router.get("/get", getAllDocs);

module.exports = router;
