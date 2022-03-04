const express= require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment.controller');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get("/",auth,commentCtrl.getAllComments);
router.post("/",auth, multer,commentCtrl.createComment);
router.delete("/:id",auth,commentCtrl.deleteComment);

module.exports = router