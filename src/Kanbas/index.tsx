import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Assignments from "./Courses/Assignments";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor";
import Session from "./Account/Session";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const addNewCourse = async (course: any) => {
    try {
      const createdCourse = await userClient.createCourse(course);
      setCourses([...courses, createdCourse]);
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };
  

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    })
    );
  };

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={async (updatedCourse) => {
                      try {
                        const updated = await courseClient.updateCourse(updatedCourse);
                        setCourses(
                          courses.map((course) =>
                            course._id === updated._id ? updated : course
                          )
                        );
                      } catch (error) {
                        console.error("Error updating course:", error);
                      }
                    }}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
