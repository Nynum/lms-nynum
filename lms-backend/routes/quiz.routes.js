const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router.get('/by-lesson/:lessonId', quizController.getQuizzesByLesson);
router.post('/', authMiddleware, roleMiddleware('admin'), quizController.createQuiz);
router.put('/:id', authMiddleware, roleMiddleware('admin'), quizController.updateQuiz);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), quizController.deleteQuiz);
router.post('/:id/submit', quizController.submitAnswer);

module.exports = router;
