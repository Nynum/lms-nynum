// 📁 backend/routes/course.routes.js

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.get('/', authenticate, courseController.getAllCourses);
router.get('/:id', authenticate, courseController.getCourseById);

module.exports = router;