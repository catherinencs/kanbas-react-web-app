import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "../Database";

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState: { enrollments: initialEnrollments || [] }, // Use imported enrollments as initial state
  reducers: {
    enroll: (state, { payload }) => {
      // Check if the enrollment already exists to avoid duplicates
      if (!state.enrollments.some((e) => e.course === payload.course && e.user === payload.user)) {
        // Create a new enrollment with a unique ID
        const newEnrollment = { ...payload, _id: new Date().getTime().toString() };
        state.enrollments.push(newEnrollment);
      }
    },
    unenroll: (state, { payload }) => {
      // Filter out the specific enrollment to "unenroll" the user
      state.enrollments = state.enrollments.filter(
        (e) => e.course !== payload.course || e.user !== payload.user
      );
    },
  },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
