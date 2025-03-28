const quizService = require('../services/quiz.service');

exports.getQuizzesByLesson = async (req, res) => {
  const quizzes = await quizService.getQuizzesByLesson(parseInt(req.params.lessonId));
  res.json(quizzes);
};

exports.createQuiz = async (req, res) => {
  const quiz = await quizService.createQuiz(req.body);
  res.status(201).json(quiz);
};

exports.updateQuiz = async (req, res) => {
  const updated = await quizService.updateQuiz(parseInt(req.params.id), req.body);
  res.json(updated);
};

exports.deleteQuiz = async (req, res) => {
  await quizService.deleteQuiz(parseInt(req.params.id));
  res.json({ message: 'Quiz deleted' });
};

exports.submitAnswer = async (req, res) => {
  const result = await quizService.submitAnswer(parseInt(req.params.id), req.body.answer);
  res.json(result);
};
