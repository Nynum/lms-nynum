const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.update = async (userId, lessonId, watchedAt, isCompleted) => {
  return await prisma.progress.upsert({
    where: {
      userId_lessonId: { userId, lessonId }
    },
    update: {
      watchedAt,
      isCompleted
    },
    create: {
      userId,
      lessonId,
      watchedAt,
      isCompleted
    }
  });
};

exports.getByLesson = async (userId, lessonId) => {
  return await prisma.progress.findUnique({
    where: {
      userId_lessonId: { userId, lessonId }
    }
  });
};
