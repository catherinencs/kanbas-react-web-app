import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import AssignmentsList from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import PeopleTable from "./People/Table"
import { FaAlignJustify } from "react-icons/fa";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const location = useLocation();
const pathname = location.pathname;

  return (
    <div id="wd-courses" className="d-flex flex-column">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        {/* Sidebar for course navigation */}
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        {/* Main content */}
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<AssignmentsList />} />
            <Route path="Assignments/:aid/Editor" element={<AssignmentEditor />} />
            <Route path="Assignments/New" element={<AssignmentEditor isNew/>} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
