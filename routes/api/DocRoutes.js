const express = require("express");
const {
  addDoc,
  getAllDocs,
  deleteDoc,
  updateFinancesDoc,
  getFinancesDoc,
  getTeamTransfferedDocs,
} = require("../../controllers/documentsController");

const { auth } = require("../../middlewares/auth");
const docsUploader = require("../../middlewares/docsUploader");
const router = express.Router();

router.post("/add", auth, docsUploader.single("doc"), addDoc);
router.get("/get", getAllDocs);
router.delete("/delete/:id", deleteDoc);
router.patch("/update/:name", auth, docsUploader.single("doc"), updateFinancesDoc);
router.get("/finance-doc", getFinancesDoc);
router.get("/team-doc", getTeamTransfferedDocs);
module.exports = router;
