import { FaPlus } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface AssignmentControlsProps {
  courseId: string | undefined;
  assignmentTitle: string;
  setAssignmentTitle: React.Dispatch<React.SetStateAction<string>>;
  addAssignmentForCourse: () => Promise<void>;
}

function AssignmentControls({
  courseId,
  assignmentTitle,
  setAssignmentTitle,
  addAssignmentForCourse,
}: AssignmentControlsProps) {
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isFaculty = currentUser && currentUser.role === "FACULTY";
  const navigate = useNavigate();

  const handleAddAssignment = () => {
    if (courseId) {
      navigate(`/Kanbas/Courses/${courseId}/Assignments/New`);
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="input-group" style={{ width: "250px" }}>
        <span className="input-group-text bg-white border-end-0">
          <BsSearch />
        </span>
        <input type="text" className="form-control border-start-0" placeholder="Search..." />
      </div>

      {isFaculty && (
        <div>
          <button
            id="add-assignment-group-btn"
            className="btn btn-light me-2"
            style={{ color: "red", borderColor: "red" }}
          >
            <FaPlus className="me-2" />
            Group
          </button>
          <button className="btn btn-danger" onClick={handleAddAssignment}>
            <FaPlus className="me-2" />
            Assignment
          </button>
        </div>
      )}
    </div>
  );
}

export default AssignmentControls;
