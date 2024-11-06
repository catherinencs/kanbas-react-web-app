import Modules from "../Modules";
import CourseStatus from "./Status";
import { useSelector } from "react-redux";

export default function Home() {
  // Check if the current user has the FACULTY role
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  return (
    <div id="wd-home" className="d-flex">
      <div className="flex-fill">
        <Modules />
      </div>
      {/* Conditionally render CourseStatus for faculty only */}
      {isFaculty && (
        <div className="d-none d-md-block ms-4">
          <CourseStatus />
        </div>
      )}
    </div>
  );
}
