import axios from "./axios";

export const getLessonById = async (id) => {
  const res = await axios.get(`/api/lessons/${id}`);
  return res.data;
};

export const markLessonAsCompleted = async (lessonId) => {
  const res = await axios.post('/api/progress', { lessonId });
  return res.data;
};
