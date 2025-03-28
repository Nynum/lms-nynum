// 📁 backend/services/course.service.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllCourses = async () => {
  return await prisma.course.findMany();
};

exports.getCourseById = async (id) => {
  if (!id) throw new Error("ID is required");

  const course = await prisma.course.findUnique({
    where: { id: Number(id) },
    include: {
      lessons: true,
      quizzes: true,
    },
  });

  return course;
};