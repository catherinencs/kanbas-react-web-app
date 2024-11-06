import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get the course and assignment IDs from the URL
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find the existing assignment or set up a new one if aid is undefined
  let assignment = assignments.find(
    (assignment: any) => assignment._id === aid && assignment.course === cid
  );

  const isNewAssignment = !assignment;
  if (isNewAssignment) {
    assignment = {
      title: "Enter a title",
      description: "Enter a description",
      course: cid,
      availableDate: "2024-11-05",
      dueDate: "2024-11-05",
      availableUntil: "2024-11-06",
      points: 100,
    };
  }

  // State variables
  const [title, setTitle] = useState(assignment.title);
  const [description, setDescription] = useState(assignment.description);
  const [availableDate, setAvailableDate] = useState(assignment.availableDate);
  const [dueDate, setDueDate] = useState(assignment.dueDate);
  const [availableUntil, setAvailableUntil] = useState(assignment.availableUntil);
  const [points, setPoints] = useState(assignment.points);

  // Save handler
  const handleSave = () => {
    const updatedAssignment = {
      ...assignment,
      title,
      description,
      availableDate,
      dueDate,
      availableUntil,
      points,
    };

    // Conditional dispatch based on whether it’s a new assignment or an update
    if (isNewAssignment) {
      dispatch(addAssignment(updatedAssignment));
    } else {
      dispatch(updateAssignment(updatedAssignment));
    }

    // Navigate back to assignments page
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          value={title}
          className="form-control"
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={5}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      {/* Points and Assignment Group */}
      <div className="row mb-3">
        <div className="col-md-3">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input
            id="wd-points"
            value={points}
            className="form-control"
            onChange={e => setPoints(parseInt(e.target.value))}
          />
        </div>

        <div className="col-md-3">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select id="wd-group" className="form-control">
            <option value="assignments">ASSIGNMENTS</option>
            <option value="quizzes">QUIZZES</option>
            <option value="projects">PROJECTS</option>
          </select>
        </div>

        <div className="col-md-3">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          <select id="wd-display-grade-as" className="form-control">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
            <option value="letter-grade">Letter Grade</option>
          </select>
        </div>

        <div className="col-md-3">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          <select id="wd-submission-type" className="form-control">
            <option value="online">Online</option>
            <option value="on-paper">On Paper</option>
            <option value="external-tool">External Tool</option>
          </select>
        </div>
      </div>

      {/* Online Entry Options */}
      <div className="mb-3">
        <label className="form-label">Online Entry Options</label><br />
        <div className="form-check">
          <input type="checkbox" id="wd-text-entry" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-website-url" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-file-upload" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
        </div>
      </div>

      {/* Due Date and Availability */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
          <input id="wd-assign-to" value="Everyone" className="form-control" />
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-due-date" className="form-label">Due</label>
          <input
            type="date"
            id="wd-due-date"
            value={dueDate}
            className="form-control"
            onChange={e => setDueDate(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="wd-available-from" className="form-label">Available from</label>
          <input
            type="date"
            id="wd-available-from"
            value={availableDate}
            className="form-control"
            onChange={e => setAvailableDate(e.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3 offset-md-6">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input
            type="date"
            id="wd-available-until"
            value={availableUntil}
            className="form-control"
            onChange={e => setAvailableUntil(e.target.value)}
          />
        </div>
      </div>

      <hr />

      {/* Buttons */}
      <div style={{ textAlign: 'right' }}>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-light me-2">Cancel</Link>
        <button onClick={handleSave} className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
