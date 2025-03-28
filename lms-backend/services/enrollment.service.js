const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.enroll = async (userId, courseId) => {
  return await prisma.enrollment.create({
    data: { userId, courseId }
  });
};

exports.getCoursesByUser = async (userId) => {
  return await prisma.enrollment.findMany({
    where: { userId },
    include: { course: true }
  });
};

exports.isEnrolled = async (userId, courseId) => {
  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: { userId, courseId }
    }
  });
  return !!enrollment;
};
