const express= require('express');
const router = express.Router();
const postCtrl = require("../controllers/post.controller");
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get("/",auth,postCtrl.getAllPosts);
router.get("/:id",auth,postCtrl.getPost);
router.post("/",auth,multer,postCtrl.createPost);
router.put("/:id",auth,multer, postCtrl.updatePost);
router.delete("/:id",auth,postCtrl.deletePost);

module.exports = router;