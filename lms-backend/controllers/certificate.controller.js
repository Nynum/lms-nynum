const certificateService = require('../services/certificate.service');

exports.issueCertificate = async (req, res) => {
  const userId = req.user.userId;
  const courseId = parseInt(req.params.courseId);
  const certificate = await certificateService.issue(userId, courseId);
  res.status(201).json(certificate);
};

exports.getMyCertificates = async (req, res) => {
  const userId = req.user.userId;
  const certificates = await certificateService.getByUser(userId);
  res.json(certificates);
};

exports.verifyCertificate = async (req, res) => {
  const { code } = req.params;
  const certificate = await certificateService.verify(code);
  if (!certificate) {
    return res.status(404).json({ error: 'Certificate not found' });
  }
  res.json(certificate);
};
