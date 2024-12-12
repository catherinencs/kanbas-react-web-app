interface CourseEditorProps {
  dialogTitle: string;
  course: any; // The course object
  setCourse: (course: any) => void; // Function to update the course state
  addCourse: () => void; // Function to save the course
}

export default function CourseEditor({
  dialogTitle,
  course,
  setCourse,
  addCourse,
}: CourseEditorProps) {
  return (
    <div
      id="wd-add-course-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{dialogTitle}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <input
              className="form-control mb-3"
              placeholder="Course Name"
              value={course.name}
              onChange={(e) =>
                setCourse({ ...course, name: e.target.value || "New Course" })
              }
            />
            <textarea
              className="form-control"
              placeholder="Course Description"
              value={course.description}
              onChange={(e) =>
                setCourse({
                  ...course,
                  description: e.target.value || "New Description",
                })
              }
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              onClick={addCourse}
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-danger"
            >
              Add Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}