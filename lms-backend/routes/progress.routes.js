const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progress.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router.post('/update', authMiddleware, roleMiddleware('student'), progressController.updateProgress);
router.get('/by-lesson/:lessonId', authMiddleware, roleMiddleware('student'), progressController.getProgressByLesson);

module.exports = router;
