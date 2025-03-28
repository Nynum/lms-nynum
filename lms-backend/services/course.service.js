const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllCourses = async () => {
  return await prisma.course.findMany();
};

exports.getCourseById = async (id) => {
  const numericId = parseInt(id);
  if (isNaN(numericId)) throw new Error("Invalid course ID");

  return await prisma.course.findUnique({ where: { id: numericId } });
};

exports.createCourse = async (data) => {
  return await prisma.course.create({ data });
};

exports.updateCourse = async (id, data) => {
  const numericId = parseInt(id);
  if (isNaN(numericId)) throw new Error("Invalid course ID");

  return await prisma.course.update({
    where: { id: numericId },
    data,
  });
};

exports.deleteCourse = async (id) => {
  const numericId = parseInt(id);
  if (isNaN(numericId)) throw new Error("Invalid course ID");

  return await prisma.course.delete({ where: { id: numericId } });
};
