const { PrismaClient } = require("@prisma/client");
const { nanoid } = require("nanoid");
const prisma = new PrismaClient();

exports.generateCertificate = async ({ studentName, courseTitle, issuedDate, downloadUrl, courseId }) => {
  const certificateId = nanoid(10);
  return await prisma.certificate.create({
    data: {
      id: certificateId,
      studentName,
      courseTitle,
      issuedDate,
      downloadUrl,
      courseId,
    },
  });
};

exports.getCertificateById = async (id) => {
  return await prisma.certificate.findUnique({
    where: { id },
  });
};

exports.getAllCertificates = async () => {
  return await prisma.certificate.findMany();
};
