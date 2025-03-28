const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lesson.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router.get('/by-course/:courseId', lessonController.getLessonsByCourse);
router.get('/:id', lessonController.getLessonById);
router.post('/', authMiddleware, roleMiddleware('admin'), lessonController.createLesson);
router.put('/:id', authMiddleware, roleMiddleware('admin'), lessonController.updateLesson);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), lessonController.deleteLesson);

module.exports = router;
