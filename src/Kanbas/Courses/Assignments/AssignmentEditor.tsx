import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as assignmentsClient from "./client"; 
import * as coursesClient from "../client";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor({ isNew = false }: { isNew?: boolean }) {
  const { cid, aid } = useParams(); // Get course and assignment IDs from the route
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Default assignment structure
  const defaultAssignment = {
    title: "New Assignment",
    description: "Assignment Description",
    course: cid,
    availableDate: new Date().toISOString().split("T")[0],
    dueDate: new Date().toISOString().split("T")[0],
    availableUntil: new Date().toISOString().split("T")[0],
    points: 100,
  };

  // Determine if this is a new or existing assignment
  const assignment = isNew
    ? defaultAssignment
    : assignments.find(
        (assignment: any) => assignment._id === aid && assignment.course === cid
      ) || defaultAssignment;

  // State variables
  const [title, setTitle] = useState(assignment.title);
  const [description, setDescription] = useState(assignment.description);
  const [availableDate, setAvailableDate] = useState(
    assignment.availableDate ? new Date(assignment.availableDate).toISOString().split("T")[0] : new Date().toISOString().split("T")[0]
  );
  const [dueDate, setDueDate] = useState(
    assignment.dueDate ? new Date(assignment.dueDate).toISOString().split("T")[0] : new Date().toISOString().split("T")[0]
  );
  const [availableUntil, setAvailableUntil] = useState(
    assignment.availableUntil ? new Date(assignment.availableUntil).toISOString().split("T")[0] : new Date().toISOString().split("T")[0]
  );
  
  
  const [points, setPoints] = useState(assignment.points);

  // Save or Add Assignment
  const handleSave = async () => {
    if (!cid) {
      console.error("Course ID is undefined");
      return;
    }

    const updatedAssignment = {
      ...assignment,
      title,
      description,
      availableDate,
      dueDate,
      availableUntil,
      points,
    };

    try {
      if (isNew) {
        const createdAssignment = await coursesClient.createAssignmentForCourse(
          cid,
          updatedAssignment
        );
        dispatch(addAssignment(createdAssignment));
      } else {
        const savedAssignment = await assignmentsClient.updateAssignment(updatedAssignment);
        dispatch(updateAssignment(savedAssignment));
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Failed to save assignment:", error);
    }
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <h1 className="mb-4">{isNew ? "Add Assignment" : "Edit Assignment"}</h1>

      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          value={title}
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input
            id="wd-points"
            value={points}
            className="form-control"
            type="number"
            onChange={(e) => setPoints(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input
            type="date"
            id="wd-due-date"
            value={dueDate}
            className="form-control"
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input
            type="date"
            id="wd-available-from"
            value={availableDate}
            className="form-control"
            onChange={(e) => setAvailableDate(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-available-until" className="form-label">Available Until</label>
          <input
            type="date"
            id="wd-available-until"
            value={availableUntil}
            className="form-control"
            onChange={(e) => setAvailableUntil(e.target.value)}
          />
        </div>
      </div>
      <hr />
      <div style={{ textAlign: "right" }}>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-light me-2">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger">
          {isNew ? "Add" : "Save"}
        </button>
      </div>
    </div>
  );
}
