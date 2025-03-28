const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificate.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router.post('/:courseId', authMiddleware, roleMiddleware('student'), certificateController.issueCertificate);
router.get('/my', authMiddleware, roleMiddleware('student'), certificateController.getMyCertificates);
router.get('/verify/:code', certificateController.verifyCertificate);

module.exports = router;
