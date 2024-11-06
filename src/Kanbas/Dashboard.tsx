import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enroll, unenroll } from "./Enrollments/reducer";

interface Course {
  _id: string;
  name: string;
  description: string;
  image?: string;
}

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer?.enrollments || []);
  const isFaculty = currentUser && currentUser.role === "FACULTY";
  const isStudent = currentUser && currentUser.role === "STUDENT";

  const [allCourses, setAllCourses] = useState(false);
  const fallbackImage = "/images/reactjs.jpg";

  const userEnrollments = enrollments.filter((enrollment: any) => enrollment.user === currentUser._id);
  const enrolledCourseIds = userEnrollments.map((enrollment: any) => enrollment.course);

  function NewCourseSection() {
    return (
      <>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
        <br />
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          placeholder="New Course Name"
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value })}
          placeholder="New Course Description"
        />
        <hr />
      </>
    );
  }

  function ToggleCoursesView() {
    return (
      <button
        aria-pressed={allCourses}
        className={`btn btn-primary ${allCourses ? "active" : ""} float-end`}
        onClick={() => setAllCourses(!allCourses)}
      >
        {allCourses ? "My Enrollments" : "Show All Courses"}
      </button>
    );
  }

  function EnrollOrUnenrollButton({ course }: { course: Course }) {
    const enrolled = enrolledCourseIds.includes(course._id);
    return (
      <button
        className={`btn ${enrolled ? "btn-danger" : "btn-success"} float-end`}
        onClick={(event) => {
          event.preventDefault();
          const enrollment = { user: currentUser._id, course: course._id };
          enrolled ? dispatch(unenroll(enrollment)) : dispatch(enroll(enrollment));
        }}
      >
        {enrolled ? "Unenroll" : "Enroll"}
      </button>
    );
  }

  function CourseActions({ course }: { course: Course }) {
    return (
      <>
        <button
          onClick={(event) => {
            event.preventDefault();
            deleteCourse(course._id);
          }}
          className="btn btn-danger float-end"
          id="wd-delete-course-click"
        >
          Delete
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            setCourse(course);
          }}
          className="btn btn-warning me-2 float-end"
          id="wd-edit-course-click"
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isFaculty ? (
        <NewCourseSection />
      ) : isStudent ? (
        <ToggleCoursesView />
      ) : null}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => allCourses || isFaculty || enrolledCourseIds.includes(course._id))
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img
                      src={course.image || fallbackImage}
                      alt={course.name}
                      className="card-img-top"
                      style={{ height: 160 }}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>
                      {isFaculty ? (
                        <CourseActions course={course} />
                      ) : isStudent ? (
                        <EnrollOrUnenrollButton course={course} />
                      ) : null}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
