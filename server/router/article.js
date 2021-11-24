const express = require("express");
const router = express.Router();
const articleCtrl = require("../controllers/articleCtrl");

// upload

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .JPG .GIF .PNG files are supported"), false);
    }
  },
});

// URL http://localhost:5000/article
router.route("/articles").get(articleCtrl.getAllArticle);

router.route("/article/:_id").get(articleCtrl.getArticle);

router.route("/article/categories").get(articleCtrl.getCategories);

// router.route("/article/like").post(articleCtrl.likeArticle);

router
  .route("/dashboard/article/add/")
  .post(upload.single("image"), articleCtrl.addNewArticle);

router
  .route("/dashboard/article/:_id")
  .patch(upload.single("image"), articleCtrl.updateArticle);
router.route("/dashboard/article/:_id").delete(articleCtrl.deleteArticle);
module.exports = router;
