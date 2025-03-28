const enrollmentService = require('../services/enrollment.service');

exports.enrollInCourse = async (req, res) => {
  const userId = req.user.userId;
  const { courseId } = req.body;
  const enrollment = await enrollmentService.enroll(userId, courseId);
  res.status(201).json(enrollment);
};

exports.getMyCourses = async (req, res) => {
  const userId = req.user.userId;
  const courses = await enrollmentService.getCoursesByUser(userId);
  res.json(courses);
};

exports.checkEnrollment = async (req, res) => {
  const userId = req.user.userId;
  const courseId = parseInt(req.params.courseId);
  const isEnrolled = await enrollmentService.isEnrolled(userId, courseId);
  res.json({ enrolled: isEnrolled });
};
