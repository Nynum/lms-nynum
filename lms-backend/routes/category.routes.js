const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");
const authenticate = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/role.middleware");

router.post("/", authenticate, authorize("admin"), categoryController.createCategory);
router.get("/", categoryController.getAllCategories);

module.exports = router;