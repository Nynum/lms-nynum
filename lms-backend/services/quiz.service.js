const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getQuizzesByLesson = async (lessonId) => {
  return await prisma.quiz.findMany({
    where: { lessonId },
    orderBy: { id: 'asc' }
  });
};

exports.createQuiz = async ({ question, options, answer, explanation, lessonId }) => {
  return await prisma.quiz.create({
    data: {
      question,
      options,
      answer,
      explanation,
      lessonId
    }
  });
};

exports.updateQuiz = async (id, data) => {
  return await prisma.quiz.update({ where: { id }, data });
};

exports.deleteQuiz = async (id) => {
  return await prisma.quiz.delete({ where: { id } });
};

exports.submitAnswer = async (quizId, userAnswer) => {
  const quiz = await prisma.quiz.findUnique({ where: { id: quizId } });
  const isCorrect = quiz.answer === userAnswer;
  return {
    correct: isCorrect,
    explanation: quiz.explanation
  };
};
