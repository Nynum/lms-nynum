import api from './axios';

export const getMyCourses = async () => {
  const res = await api.get('/courses/my');
  return res.data;
};

export const getAllCourses = async () => {
  const res = await api.get('/courses');
  return res.data;
};

export const enrollCourse = async (courseId) => {
  const res = await api.post(`/enrollments/${courseId}`);
  return res.data;
};
