import axios from "./axios";

export const getQuizByLesson = async (lessonId) => {
  const res = await axios.get(`/api/quiz/${lessonId}`);
  return res.data;
};

export const submitQuiz = async (lessonId, answers) => {
  const res = await axios.post(`/api/quiz/submit`, {
    lessonId,
    answers
  });
  return res.data;
};
