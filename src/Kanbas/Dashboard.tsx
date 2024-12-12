import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CourseEditor from "./CourseEditor";
import DeleteDialog from "./DeleteCourseDialog";
import EditCourseDialog from "./EditCourseDialog";
import ActionDialog from "./ActionDialog";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { enrollIntoCourse, unenrollFromCourse } from "./Account/client";
import { findMyCourses } from "./Account/client";
import { fetchAllCourses } from "./Courses/client";

interface Course {
  _id: string;
  name: string;
  description: string;
  image?: string;
}

interface DashboardProps {
  courses: any[];
  addNewCourse: (course: Course) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (updatedCourse: Course) => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}

export default function Dashboard({
  courses,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment
}: DashboardProps) {
  const [course, setCourse] = useState({
    _id: Date.now().toString(),
    name: "New Course",
    description: "New Description",
    image: "/images/reactjs.jpg",
  });

  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [allCourses, setAllCourses] = useState<Course[]>([]);

  // Get current user and check their role
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const fetchEnrollments = async () => {
    try {
      const courses = await findMyCourses();
      const enrolledCourseIds = courses.map((course: Course) => course._id);
      setEnrolledCourses(enrolledCourseIds);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const courses = await fetchAllCourses();
      setAllCourses(courses);
    } catch (error) {
      console.error("Error fetching all courses:", error);
    }
  };

  const handleAddCourse = async () => {
    try {
      await addNewCourse(course);
      setCourse({
        _id: Date.now().toString(),
        name: "New Course",
        description: "New Description",
        image: "/images/reactjs.jpg",
      });

      if (showAllCourses) {
        await fetchCourses();
      } else {
        await fetchEnrollments();
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const handleEnroll = async (courseId: string) => {
    try {
      await enrollIntoCourse(currentUser._id, courseId);
      setEnrolledCourses((prev) => [...prev, courseId]);
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    try {
      await unenrollFromCourse(currentUser._id, courseId);
      setEnrolledCourses((prev) => prev.filter((id) => id !== courseId));
    } catch (error) {
      console.error("Error unenrolling from course:", error);
    }
  };

  const handleDeleteCourse = (courseId: string) => {
    deleteCourse(courseId);
    setAllCourses((prevCourses) => prevCourses.filter((course) => course._id !== courseId));
  };

  const handleUpdateCourse = (updatedCourse: Course) => {
    updateCourse(updatedCourse);
    setAllCourses((prevCourses) =>
      prevCourses.map((course) =>
        course._id === updatedCourse._id ? updatedCourse : course
      )
    );
  };

  useEffect(() => {
    if (currentUser) {
      fetchEnrollments();
    }
  }, [currentUser]);

  useEffect(() => {
    if (showAllCourses) {
      fetchCourses();
    }
  }, [showAllCourses]);

  const toggleCoursesView = async () => {
    if (showAllCourses) {
      await fetchEnrollments();
    } else {
      await fetchCourses();
    }
    setShowAllCourses(!showAllCourses);
  };

  const displayedCourses = showAllCourses
    ? allCourses
    : courses.filter((course) => enrolledCourses.includes(course._id));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button onClick={toggleCoursesView} className="float-end btn btn-primary" >
          {showAllCourses ? "View My Courses" : "View All Courses"}
        </button>
      </h1>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h2 id="wd-dashboard-published">
          {isFaculty ? "Published Courses" : "My Courses"} ({displayedCourses.length})
        </h2>
        {isFaculty && (
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#wd-add-course-dialog"
          >
            Add New Course
          </button>
        )}
      </div>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {displayedCourses.map((course) => (
            <div
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
              key={course._id}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src={course.image || "/images/default.jpg"}
                    alt={course.name}
                    className="card-img-top"
                    style={{ height: 160 }}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}</h5>
                    <p className="card-text">{course.description}</p>
                  </div>
                </Link>
                <div
                  className="d-flex justify-content-between align-items-center p-2"
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderTop: "1px solid #e9ecef",
                  }}
                >
                  <div>
                    {enrolledCourses.includes(course._id) ? (
                      <>
                        <button
                          className="btn btn-danger btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target={`#wd-unenroll-course-dialog-${course._id}`}
                        >
                          Unenroll
                        </button>
                        <ActionDialog
                          id={course._id}
                          name={course.name}
                          actionType="Unenroll"
                          onConfirm={() => handleUnenroll(course._id)}
                        />
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-success btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target={`#wd-enroll-course-dialog-${course._id}`}
                        >
                          Enroll
                        </button>
                        <ActionDialog
                          id={course._id}
                          name={course.name}
                          actionType="Enroll"
                          onConfirm={() => handleEnroll(course._id)}
                        />
                      </>
                    )}
                  </div>
                  {isFaculty && (
  <div className="d-flex">
    <button
      className="btn btn-outline-primary btn-sm d-flex justify-content-center align-items-center me-2"
      title="Edit Course"
      data-bs-toggle="modal"
      data-bs-target={`#wd-edit-course-dialog-${course._id}`}
    >
      <FaPencilAlt />
    </button>
    <button
      className="btn btn-outline-danger btn-sm d-flex justify-content-center align-items-center"
      title="Delete Course"
      data-bs-toggle="modal"
      data-bs-target={`#wd-delete-course-dialog-${course._id}`}
    >
      <FaTrash />
    </button>
  </div>
)}

                </div>
              </div>
              <DeleteDialog
                id={course._id}
                name={course.name}
                onDelete={() => handleDeleteCourse(course._id)}
              />
              <EditCourseDialog
                course={course}
                onUpdate={(updatedCourse) => handleUpdateCourse(updatedCourse)}
              />
            </div>
          ))}
        </div>
      </div>
      {isFaculty && (
        <CourseEditor
          dialogTitle="Add New Course"
          course={course}
          setCourse={setCourse}
          addCourse={handleAddCourse}
        />
      )}
    </div>
  );
}