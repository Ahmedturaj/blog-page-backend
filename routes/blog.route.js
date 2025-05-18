const express = require('express');
const { createBlog, getBlogs, updateBlog, deleteBlog } = require('../controller/blog.controiller.js');
const { isAdmin,protect } = require('../middlewares/auth.middleware.js');
const router = express.Router();

router.get('/blog', protect,isAdmin, getBlogs);
router.post('/blog',protect, isAdmin, createBlog);
router.put("blog/:id",protect,isAdmin,updateBlog);
router.delete("blog/:id", protect,isAdmin,deleteBlog);

module.exports = router;