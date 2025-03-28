const progressService = require('../services/progress.service');

exports.updateProgress = async (req, res) => {
  const userId = req.user.userId;
  const { lessonId, watchedAt, isCompleted } = req.body;
  const progress = await progressService.update(userId, lessonId, watchedAt, isCompleted);
  res.status(200).json(progress);
};

exports.getProgressByLesson = async (req, res) => {
  const userId = req.user.userId;
  const lessonId = parseInt(req.params.lessonId);
  const progress = await progressService.getByLesson(userId, lessonId);
  res.json(progress);
};
