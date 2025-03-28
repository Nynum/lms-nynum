const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true
    }
  });
};

exports.getById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true
    }
  });
};

exports.updateRole = async (id, role) => {
  return await prisma.user.update({
    where: { id },
    data: { role }
  });
};

exports.delete = async (id) => {
  return await prisma.user.delete({ where: { id } });
};
