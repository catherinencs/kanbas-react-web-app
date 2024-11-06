import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaRegClipboard } from "react-icons/fa";
import { BsGripVertical, BsSearch, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import AssignmentControlButtons from "./AssignmentControlButtons";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { deleteAssignment } from "./reducer";

function AssignmentItem({ data }: { data: any }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  const availableFrom = new Date(data.availableDate);
  const dueDate = new Date(data.dueDate);
  const dateFormatOptions: Intl.DateTimeFormatOptions = { month: "short", day: "2-digit" };

  return (
    <li className="assignment-list-item list-group-item p-3 ps-1">
      <div className="d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
        <FaRegClipboard className="me-2" />
        <div className="d-inline-block flex-grow-1">
          {isFaculty ? (
            // Link to the editor if the user is faculty
            <Link
              to={`/Kanbas/Courses/${data.course}/Assignments/${data._id}/Editor`}
              style={{ color: "black", textDecoration: "none", fontWeight: "bold" }}
            >
              {data.title}
            </Link>
          ) : (
            // Render title as plain text for non-faculty users
            <span style={{ color: "black", fontWeight: "bold" }}>{data.title}</span>
          )}
          <br />
          <span style={{ color: "red" }}>{data.description}</span> | <strong>Available from </strong>
          {availableFrom.toLocaleString("en-US", dateFormatOptions)} | Due {dueDate.toLocaleString("en-US", dateFormatOptions)} |{" "}
          {data.points} pts
        </div>
        <div>
          <AssignmentControlButtons deleteAssignment={() => dispatch(deleteAssignment(data._id))} />
        </div>
      </div>
    </li>
  );
}

function ControlPanel({ courseId }: { courseId: string | undefined }) {
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="input-group" style={{ width: "250px" }}>
        <span className="input-group-text bg-white border-end-0">
          <BsSearch />
        </span>
        <input type="text" className="form-control border-start-0" placeholder="Search..." />
      </div>

      {isFaculty && (
        // Only show these buttons for faculty
        <div>
          <button
            id="add-assignment-group-btn"
            className="btn btn-light me-2"
            style={{ color: "red", borderColor: "red" }}
          >
            <FaPlus className="me-2" />
            Group
          </button>
          <Link
            id="add-assignment-btn"
            className="btn btn-danger"
            to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}
          >
            <FaPlus className="me-2" />
            Assignment
          </Link>
        </div>
      )}
    </div>
  );
}

export default function AssignmentsList() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  return (
    <div id="assignments-section" className="p-4">
      <ControlPanel courseId={cid} />
      <ul id="modules-list" className="list-group rounded-0">
        <li className="module-item list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="d-flex justify-content-between align-items-center mb-3 bg-secondary p-3">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <h3 id="module-title" className="mb-0">Week 1</h3>
            </div>
            <div className="d-flex align-items-center">
              <div className="bg-light rounded-pill px-3 py-1 me-2 text-muted">40% of Total</div>
              <BsPlus className="me-3" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul id="assignment-list" className="list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <AssignmentItem data={assignment} key={assignment._id} />
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
