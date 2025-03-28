const courseService = require('../services/course.service');

exports.getAllCourses = async (req, res) => {
  const courses = await courseService.getAllCourses();
  res.json(courses);
};

exports.getCourseById = async (req, res) => {
  const course = await courseService.getCourseById(parseInt(req.params.id));
  if (!course) return res.status(404).json({ error: 'Course not found' });
  res.json(course);
};

exports.createCourse = async (req, res) => {
  const course = await courseService.createCourse(req.body);
  res.status(201).json(course);
};

exports.updateCourse = async (req, res) => {
  const updated = await courseService.updateCourse(parseInt(req.params.id), req.body);
  res.json(updated);
};

exports.deleteCourse = async (req, res) => {
  await courseService.deleteCourse(parseInt(req.params.id));
  res.json({ message: 'Course deleted' });
};
