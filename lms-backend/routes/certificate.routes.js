const express = require("express");
const router = express.Router();
const certificateController = require("../controllers/certificate.controller");
const { authenticate, authorize } = require("../middlewares/auth.middleware");

// 🔐 ใช้กับนักเรียนเท่านั้น
router.post("/:courseId", authenticate, authorize("student"), certificateController.issueCertificate);
router.get("/my", authenticate, authorize("student"), certificateController.getMyCertificates);

// ✅ เพิ่ม route POST /api/certificates (ไม่ต้องใส่ courseId ใน URL)
router.post("/", authenticate, authorize("student"), certificateController.issueCertificateFromBody);

// ✅ สำหรับยืนยันใบรับรอง
router.get("/verify/:code", certificateController.verifyCertificate);

module.exports = router;
