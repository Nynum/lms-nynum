const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollment.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router.post('/', authMiddleware, roleMiddleware('student'), enrollmentController.enrollInCourse);
router.get('/my-courses', authMiddleware, roleMiddleware('student'), enrollmentController.getMyCourses);
router.get('/:courseId', authMiddleware, roleMiddleware('student'), enrollmentController.checkEnrollment);

module.exports = router;
