const lessonService = require('../services/lesson.service');

exports.getLessonsByCourse = async (req, res) => {
  const lessons = await lessonService.getLessonsByCourse(parseInt(req.params.courseId));
  res.json(lessons);
};

exports.getLessonById = async (req, res) => {
  const lesson = await lessonService.getLessonById(parseInt(req.params.id));
  if (!lesson) return res.status(404).json({ error: 'Lesson not found' });
  res.json(lesson);
};

exports.createLesson = async (req, res) => {
  const lesson = await lessonService.createLesson(req.body);
  res.status(201).json(lesson);
};

exports.updateLesson = async (req, res) => {
  const updated = await lessonService.updateLesson(parseInt(req.params.id), req.body);
  res.json(updated);
};

exports.deleteLesson = async (req, res) => {
  await lessonService.deleteLesson(parseInt(req.params.id));
  res.json({ message: 'Lesson deleted' });
};
