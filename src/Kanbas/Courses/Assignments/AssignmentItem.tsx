import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import { FaRegClipboard } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { editAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";

export default function AssignmentItem({
  assignment,
  removeAssignment,
}: {
  assignment: any;
  removeAssignment: (assignmentId: string) => void;
}) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  const availableFrom = new Date(assignment.availableDate);
  const availableUntil = new Date(assignment.availableUntil);

  const dueDate = new Date(assignment.dueDate);
  const dateFormatOptions: Intl.DateTimeFormatOptions = { month: "short", day: "2-digit" };

  const saveAssignment = async (updatedAssignment: any) => {
    await assignmentsClient.updateAssignment(updatedAssignment);
    dispatch(updateAssignment(updatedAssignment));
  };

  return (
    <li className="assignment-list-item list-group-item p-3 ps-1">
  <div className="d-flex align-items-center justify-content-between">
    {/* LEFT SIDE */}
    <div className="d-flex align-items-center flex-shrink-0">
      <BsGripVertical className="me-2 fs-3" />
      <FaRegClipboard className="me-2" />
    </div>

    {/* MIDDLE SIDE */}
    <div className="flex-grow-1 mx-3">
      {isFaculty ? (
        <Link
          to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}/Editor`}
          style={{ color: "black", textDecoration: "none", fontWeight: "bold" }}
        >
          {assignment.title}
        </Link>
      ) : (
        <span style={{ color: "black", fontWeight: "bold" }}>{assignment.title}</span>
      )}
      <br />
      <span style={{ color: "red" }}>{assignment.description}</span> 
      <br />
      <strong>Available until </strong>
      {availableUntil.toLocaleString("en-US", dateFormatOptions)} | 
      {" "} <strong>Due </strong>
      {dueDate.toLocaleString("en-US", dateFormatOptions)} | {assignment.points} pts 
    </div>

    {/* RIGHT SIDE */}
    <div className="flex-shrink-0">
      <AssignmentControlButtons
        assignmentId={assignment._id}
        deleteAssignment={() => removeAssignment(assignment._id)}
        editAssignment={(id) => dispatch(editAssignment(id))}
      />
    </div>
  </div>
</li>

  );
}
