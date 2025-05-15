const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({ ...req.body, author: req.user._id });
   return res.status(201).json({
        status: true,
        message: "Blog created successfully",
        data:blog});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'email');
    return res.json({
        status: true,
        message: "Blogs fetched successfully",
        data:blogs});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog || blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        status: false,
        message: 'Unauthorized' });
    }
    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;
    const updated = await blog.save();
   return res.json({
    status: true,
    message: "Blog updated successfully",
    updated});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog || blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        status: false,
        message: 'Unauthorized' });
    }
    await blog.remove();
    return res.json({
        status: true,
        message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};