const categoryService = require('../services/category.service');

exports.createCategory = async (req, res) => {
  const category = await categoryService.create(req.body.name);
  res.status(201).json(category);
};

exports.getAllCategories = async (req, res) => {
  const categories = await categoryService.getAll();
  res.json(categories);
};

exports.getCoursesByCategory = async (req, res) => {
  const categoryId = parseInt(req.params.id);
  const courses = await categoryService.getCoursesByCategory(categoryId);
  res.json(courses);
};
