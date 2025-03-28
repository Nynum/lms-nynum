import axios from "./axios";

export const getCertificateByCourse = async (courseId) => {
  const res = await axios.get(`/api/certificates/${courseId}`);
  return res.data;
};
