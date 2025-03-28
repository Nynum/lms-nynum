const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router.post('/', authMiddleware, roleMiddleware('admin'), categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id/courses', categoryController.getCoursesByCategory);

module.exports = router;
