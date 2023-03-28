const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //args sequence is errors, destination
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + file.originalname);
  },
});

const docsUploader = multer({
  storage: storage,

  fileFilter: function (req, file, cb) {
    //allowing audio,docx,pdf,jpeg,png,jpg
    if (
      //   file.mimetype === "audio/mpeg" ||
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      //   file.mimetype ===
      //     "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      //   file.mimetype === "image/jpeg" ||
      //   file.mimetype === "image/png" ||
      //   file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("document type is invalid"), false);
    }
  },
});

module.exports = docsUploader;
