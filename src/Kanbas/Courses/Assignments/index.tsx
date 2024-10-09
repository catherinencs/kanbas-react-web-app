import { FaSearch, FaPlus, FaRegClipboard } from "react-icons/fa";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons"; 

export default function Assignments() {
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
        {/* Assignment 1 */}
        <li className="wd-assignment-list-item list-group-item ps-3 mb-0" style={{ backgroundColor: "#fff", borderLeft: "4px solid green" }}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-start">
              {/* Icons on the left */}
              <BsGripVertical className="me-2 fs-4" />
              <FaRegClipboard className="me-2 fs-4" /> {/* Updated Icon */}
              <div>
                {/* Assignment title and description next to the icons */}
                <a className="wd-assignment-link text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/123">
                  A1
                </a>
                <div className="wd-assignment-details text-muted">
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
            </div>
            {/* LessonControlButtons wrapped in a div */}
            <div className="ms-auto">
              <div className="d-flex align-items-center">
                <LessonControlButtons /> {/* No className applied directly */}
              </div>
            </div>
          </div>
        </li>

        {/* Assignment 2 */}
        <li className="wd-assignment-list-item list-group-item ps-3 mb-0" style={{ backgroundColor: "#fff", borderLeft: "4px solid green" }}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 fs-4" />
              <FaRegClipboard className="me-2 fs-4" />
              <div>
                <a className="wd-assignment-link text-decoration-none" href="#/Kanbas/Courses/5678/Assignments/456">
                  A2
                </a>
                <div className="wd-assignment-details text-muted">
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
            </div>
            <div className="ms-auto">
              <div className="d-flex align-items-center">
                <LessonControlButtons /> {/* Wrapped inside div */}
              </div>
            </div>
          </div>
        </li>

        {/* Assignment 3 */}
        <li className="wd-assignment-list-item list-group-item ps-3 mb-0" style={{ backgroundColor: "#fff", borderLeft: "4px solid green" }}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 fs-4" />
              <FaRegClipboard className="me-2 fs-4" />
              <div>
                <a className="wd-assignment-link text-decoration-none" href="#/Kanbas/Courses/9101/Assignments/789">
                  A3
                </a>
                <div className="wd-assignment-details text-muted">
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
                </div>
              </div>
            </div>
            <div className="ms-auto">
              <div className="d-flex align-items-center">
                <LessonControlButtons /> 
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
