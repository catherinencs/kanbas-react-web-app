import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
const ATTEMPTS_API = `${REMOTE_SERVER}/api/attempts`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const USERS_API = `${REMOTE_SERVER}/api/users`;

// Create a new quiz attempt.
export const createAttempt = async (
  courseId: string,
  quizId: string,
  attemptData: object
) => {
  try {
    const response = await axiosWithCredentials.post(
      `${QUIZZES_API}/${quizId}/attempts`,
      attemptData
    );
    return response.data;
  } catch (error) {
    console.error("Failed to create a new attempt:", error);
    throw error;
  }
};

// Update an attempt by ID.
export const updateAttempt = async (
  attemptId: string,
  attemptUpdates: object
) => {
  try {
    const response = await axiosWithCredentials.put(
      `${ATTEMPTS_API}/${attemptId}`,
      attemptUpdates
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update the specified attempt:", error);
    throw error;
  }
};

// Delete an attempt by ID.
export const deleteAttempt = async (attemptId: string) => {
  try {
    const response = await axiosWithCredentials.delete(
      `${ATTEMPTS_API}/${attemptId}`
    );
    return response.data;
  } catch (error) {
    console.error("Unable to delete the attempt:", error);
    throw error;
  }
};

// Get all attempts for a user.
export const getUserAttempts = async (userId: string) => {
  try {
    const response = await axiosWithCredentials.get(
      `${USERS_API}/${userId}/attempts`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to retrieve attempts for user ${userId}:`, error);
    throw error;
  }
};

// Get the number of attempts for a specific quiz.
export const getUserQuizAttempts = async (courseId: string, quizId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/quizzes/${quizId}/attempts`
  );
  return response.data;
};

//Increment the attempt count for a quiz.
export const incrementUserAttempt = async (
  courseId: string,
  quizId: string
) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/quizzes/${quizId}/attempt`
  );
  return response.data;
};

//Get all attempts for a quiz.
export const getAllAttemptsForQuiz = async (quizId: string) => {
  try {
    const response = await axiosWithCredentials.get(
      `${QUIZZES_API}/${quizId}/attempts`
    );
    return response.data;
  } catch (error) {
    console.error("Unable to fetch attempts for the quiz:", error);
    throw error;
  }
};

//Get an attempt by its ID.
export const getAttemptById = async (attemptId: string) => {
  try {
    const response = await axiosWithCredentials.get(
      `${ATTEMPTS_API}/${attemptId}`
    );
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve attempt details by ID:", error);
    throw error;
  }
};

// Get the latest attempt for a quiz.
export const findLastAttempt = async (quizId: string) => {
  try {
    const response = await axiosWithCredentials.get(
      `${QUIZZES_API}/${quizId}/attempts/latest`
    );
    return response.data;
  } catch (error) {
    console.error("Could not fetch the latest attempt for the quiz:", error);
    throw error;
  }
};