const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getLessonsByCourse = async (courseId) => {
  return await prisma.lesson.findMany({
    where: { courseId },
    orderBy: { order: 'asc' }
  });
};

exports.getLessonById = async (id) => {
  return await prisma.lesson.findUnique({ where: { id } });
};

exports.createLesson = async ({ title, content, order, courseId }) => {
  return await prisma.lesson.create({ data: { title, content, order, courseId } });
};

exports.updateLesson = async (id, data) => {
  return await prisma.lesson.update({ where: { id }, data });
};

exports.deleteLesson = async (id) => {
  return await prisma.lesson.delete({ where: { id } });
};
