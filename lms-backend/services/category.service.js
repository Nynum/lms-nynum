const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.create = async (name) => {
  return await prisma.category.create({
    data: { name }
  });
};

exports.getAll = async () => {
  return await prisma.category.findMany();
};

exports.getCoursesByCategory = async (categoryId) => {
  return await prisma.course.findMany({
    where: { categoryId }
  });
};
