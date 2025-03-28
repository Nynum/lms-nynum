const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 10);

exports.issue = async (userId, courseId) => {
  const existing = await prisma.certificate.findUnique({
    where: { userId_courseId: { userId, courseId } }
  });
  if (existing) return existing;

  const code = nanoid();
  return await prisma.certificate.create({
    data: { userId, courseId, code }
  });
};

exports.getByUser = async (userId) => {
  return await prisma.certificate.findMany({
    where: { userId },
    include: { course: true }
  });
};

exports.verify = async (code) => {
  return await prisma.certificate.findUnique({
    where: { code },
    include: { user: true, course: true }
  });
};
