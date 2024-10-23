import { Link, useParams, useLocation } from "react-router-dom";
import "../styles.css"; 

export default function CoursesNavigation() {
  const { cid } = useParams(); 
  const location = useLocation();
  
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Courses/${cid}/${link}`; // Dynamic path with course ID
        const isActive = location.pathname === path; // Check if the current link is active

        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item ${isActive ? "active" : "text-danger"} border-0`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
