import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  availableUntil: string;
  course: string;
  editing?: boolean;
}

interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Set assignments from the server
    setAssignments(state, action: PayloadAction<Assignment[]>) {
      state.assignments = action.payload;
    },

    // Add a new assignment
    addAssignment(state, action: PayloadAction<Omit<Assignment, "_id">>) {
      const newAssignment: Assignment = {
        _id: new Date().getTime().toString(),
        ...action.payload,
      };
      state.assignments = [...state.assignments, newAssignment];
    },

    // Delete an assignment by ID
    deleteAssignment(state, action: PayloadAction<string>) {
      state.assignments = state.assignments.filter(
        (a) => a._id !== action.payload
      );
    },

    // Update an existing assignment
    updateAssignment(state, action: PayloadAction<Assignment>) {
      state.assignments = state.assignments.map((a) =>
        a._id === action.payload._id ? action.payload : a
      );
    },

    // Edit assignment (set editing state)
    editAssignment(state, action: PayloadAction<string>) {
      state.assignments = state.assignments.map((a) =>
        a._id === action.payload ? { ...a, editing: true } : a
      );
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
