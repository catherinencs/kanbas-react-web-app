import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";

const initialState = {
  assignments: initialAssignments || [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment(state, action) {
      const newAssignment = { ...action.payload, _id: `${Date.now()}` };
      state.assignments.push(newAssignment);
    },
    updateAssignment(state, action) {
      const index = state.assignments.findIndex(a => a._id === action.payload._id);
      if (index >= 0) state.assignments[index] = action.payload;
    },
    deleteAssignment(state, action) {
      state.assignments = state.assignments.filter(a => a._id !== action.payload);
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
