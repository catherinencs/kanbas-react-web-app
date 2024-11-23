import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;


// Enroll a user in a course
export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const { data } = await axios.post(ENROLLMENTS_API, { userId, courseId });
  return data;
};

// Unenroll a user from a course
export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const { data } = await axios.delete(ENROLLMENTS_API, {
    data: { userId, courseId },
  });
  return data;
};
