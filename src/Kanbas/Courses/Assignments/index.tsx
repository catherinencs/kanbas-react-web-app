import { FaSearch, FaPlus, FaRegClipboard } from "react-icons/fa";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { assignments } from "../../Database"; 

export default function Assignments() {
  const { cid } = useParams(); // Get the course ID from the URL params
  const filteredAssignments = assignments.filter((assignment) => assignment.course === cid); // Filter assignments by course ID

  return (
    <div id="wd-assignments" className="p-4">
      {/* Search Bar and Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ width: "250px" }}>
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            type="text"
            className="form-control border-start-0"
            placeholder="Search..."
          />
        </div>

        <div>
          <button
            id="wd-add-assignment-group"
            className="btn btn-light me-2"
            style={{ color: "red", borderColor: "red" }}
          >
            <FaPlus className="me-2" />
            Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-2" />
            Assignment
          </button>
        </div>
      </div>

      {/* Assignments Title */}
      <div className="d-flex justify-content-between align-items-center mb-3 bg-secondary p-3">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2" />
          <h3 id="wd-assignments-title" className="mb-0">ASSIGNMENTS</h3>
        </div>
        <div className="d-flex align-items-center">
          <div className="bg-light rounded-pill px-3 py-1 me-2 text-muted">
            40% of Total
          </div>
          <FaPlus className="me-3" />
          <BsThreeDotsVertical />
        </div>
      </div>

      {/* Assignment List */}
      <ul id="wd-assignment-list" className="list-group">
        {filteredAssignments.map((assignment) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item list-group-item ps-3 mb-0"
            style={{ backgroundColor: "#fff", borderLeft: "4px solid green" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-start">
                {/* Icons on the left */}
                <BsGripVertical className="me-2 fs-4" />
                <FaRegClipboard className="me-2 fs-4" />
                <div>
                  {/* Assignment title and description next to the icons */}
                  <a
                    className="wd-assignment-link text-decoration-none"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </a>
                  <div className="wd-assignment-details text-muted">
                    <span className="text-danger">{assignment.description}</span> | <strong>Not available until</strong> {assignment.availableDate} | <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
                  </div>
                </div>
              </div>
              {/* LessonControlButtons wrapped in a div */}
              <div className="ms-auto">
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
