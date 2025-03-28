// 📁 backend/controllers/course.controller.js

const courseService = require('../services/course.service');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  } catch (err) {
    console.error('Error in getAllCourses:', err);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: 'Missing course ID' });

    const course = await courseService.getCourseById(id);
    res.json(course);
  } catch (err) {
    console.error('Error in getCourseById:', err);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
};