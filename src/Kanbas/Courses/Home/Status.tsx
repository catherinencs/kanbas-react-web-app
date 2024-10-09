import { FaBan, FaCheckCircle, FaUpload, FaHome, FaStream, FaBullhorn, FaChartLine, FaBell } from 'react-icons/fa';

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>

      {/* Unpublish and Publish buttons */}
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-light d-flex align-items-center">
          <FaBan className="me-2" /> Unpublish
        </button>
        <button className="btn btn-success d-flex align-items-center">
          <FaCheckCircle className="me-2" /> Publish
        </button>
      </div>

      {/* Action Buttons */}
      <div className="course-status-actions">
        <button className="btn btn-light w-100 text-start d-flex align-items-center mb-2">
          <FaUpload className="me-2" /> Import Existing Content
        </button>
        <button className="btn btn-light w-100 text-start d-flex align-items-center mb-2">
          <FaUpload className="me-2" /> Import from Commons
        </button>
        <button className="btn btn-light w-100 text-start d-flex align-items-center mb-2">
          <FaHome className="me-2" /> Choose Home Page
        </button>
        <button className="btn btn-light w-100 text-start d-flex align-items-center mb-2">
          <FaStream className="me-2" /> View Course Screen
        </button>
        <button className="btn btn-light w-100 text-start d-flex align-items-center mb-2">
          <FaBullhorn className="me-2" /> New Announcement
        </button>
        <button className="btn btn-light w-100 text-start d-flex align-items-center mb-2">
          <FaChartLine className="me-2" /> New Analytics
        </button>
        <button className="btn btn-light w-100 text-start d-flex align-items-center">
          <FaBell className="me-2" /> View Course Notifications
        </button>
      </div>
    </div>
  );
}
