import { Link } from "react-router-dom";
import "../styles.css"; // Ensure styles.css is properly linked

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      
      {/* Home link styled as active */}
      <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
            className="list-group-item active border-0">
        Home
      </Link>

      {/* Modules Link */}
      <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
            className="list-group-item text-danger border-0">
        Modules
      </Link>

      {/* Piazza Link */}
      <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
            className="list-group-item text-danger border-0">
        Piazza
      </Link>

      {/* Zoom Link */}
      <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
            className="list-group-item text-danger border-0">
        Zoom
      </Link>

      {/* Assignments Link */}
      <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
            className="list-group-item text-danger border-0">
        Assignments
      </Link>

      {/* Quizzes Link */}
      <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
            className="list-group-item text-danger border-0">
        Quizzes
      </Link>

      {/* People Link */}
      <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
            className="list-group-item text-danger border-0">
        People
      </Link>
      
    </div>
  );
}
