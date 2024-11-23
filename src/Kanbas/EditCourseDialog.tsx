import { useState } from "react";

interface EditCourseDialogProps {
  course: {
    _id: string;
    name: string;
    description: string;
  };
  onUpdate: (updatedCourse: { _id: string; name: string; description: string }) => void;
}

export default function EditCourseDialog({ course, onUpdate }: EditCourseDialogProps) {
  const [name, setName] = useState(course.name);
  const [description, setDescription] = useState(course.description);

  const handleUpdate = () => {
    onUpdate({ _id: course._id, name, description });
  };

  return (
    <div
      className="modal fade"
      id={`wd-edit-course-dialog-${course._id}`}
      tabIndex={-1}
      aria-labelledby={`editDialogLabel-${course._id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`editDialogLabel-${course._id}`}>
              Edit Course
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor={`course-name-${course._id}`} className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id={`course-name-${course._id}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`course-description-${course._id}`} className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id={`course-description-${course._id}`}
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdate}
              data-bs-dismiss="modal"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
