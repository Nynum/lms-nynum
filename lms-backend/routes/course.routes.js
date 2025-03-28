const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.post('/', authMiddleware, roleMiddleware('admin'), courseController.createCourse);
router.put('/:id', authMiddleware, roleMiddleware('admin'), courseController.updateCourse);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), courseController.deleteCourse);

module.exports = router;
