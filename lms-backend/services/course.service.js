const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllCourses = async () => {
  return await prisma.course.findMany();
};

exports.getCourseById = async (id) => {
  return await prisma.course.findUnique({ where: { id } });
};

exports.createCourse = async ({ title, description }) => {
  return await prisma.course.create({ data: { title, description } });
};

exports.updateCourse = async (id, data) => {
  return await prisma.course.update({ where: { id }, data });
};

exports.deleteCourse = async (id) => {
  return await prisma.course.delete({ where: { id } });
};
