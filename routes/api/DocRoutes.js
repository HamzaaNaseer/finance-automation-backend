const express = require("express");
const {
  addDoc,
  getAllDocs,
  deleteDoc,
} = require("../../controllers/documentsController");

const { auth } = require("../../middlewares/auth");
const docsUploader = require("../../middlewares/docsUploader");
const router = express.Router();

router.post("/add", auth, docsUploader.single("doc"), addDoc);
router.get("/get", getAllDocs);
router.delete("/delete/:id", deleteDoc);

module.exports = router;
