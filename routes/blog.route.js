const express = require('express');
const { createBlog, getBlogs, updateBlog, deleteBlog } = require('../controllers/blog.controller.js');
const { isAdmin,protect } = require('../middlewares/auth.middleware.js');
const router = express.Router();

router.get('/', protect, getBlogs);
router.post('/', protect, createBlog);
router.put("/:id",protect,isAdmin,updateBlog);
router.delete("/:id", protect,isAdmin,deleteBlog);

module.exports = router;