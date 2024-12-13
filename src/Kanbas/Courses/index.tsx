import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import AssignmentsList from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import PeopleTable from "./People/Table"
import { FaAlignJustify } from "react-icons/fa";
import { useEffect, useState } from "react";
import * as client from "./client";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizPreview from "./Quizzes/QuizPreview";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizReview from "./Quizzes/QuizReview";
import ProtectedRouteEditor from "./ProtectedRouteEditor";
import ProtectedRouteQuizEditor from "./ProtectedRouteQuizEditor";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const location = useLocation();
const pathname = location.pathname;
const [users, setUsers] = useState([]);


const fetchUsers = async () => {
  try {
    if (!cid) return; // Skip if course ID is missing
    const users = await client.findUsersForCourse(cid); // Fetch users for the course
    setUsers(users); // Update state
    console.log("Users in state:", users); // Log the users state
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};


useEffect(() => {
  if (cid) {
    fetchUsers();
  }
}, [cid]);

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
            <Route path="People" element={<PeopleTable users={users} />} />
            <Route path="Quizzes" element={<Quizzes />} />
                <Route path="Quizzes/:qid" element={<QuizDetails />} />
                <Route
                  path="Quizzes/:qid/Edit/*"
                  element={
                    <ProtectedRouteQuizEditor>
                      <QuizEditor />
                    </ProtectedRouteQuizEditor>
                  }
                />
                <Route
                  path="Quizzes/:qid/Preview"
                  element={
                    <ProtectedRouteQuizEditor>
                      <QuizPreview />
                    </ProtectedRouteQuizEditor>
                  }
                />
                <Route path="Quizzes/:qid/Review" element={<QuizReview />} />
                <Route path="Quizzes/:qid/Attempt" element={<QuizPreview />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
