import { useSelector } from "react-redux";
import { FaTrash, FaPen } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { Link, useParams } from "react-router-dom";
import DeleteDialog from "../DeleteDialog";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
  editAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
  editAssignment: (assignmentId: string) => void;
}) {
  const { cid } = useParams(); // Get the course ID from the route
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="float-end">
      <GreenCheckmark />
      {currentUser?.role === "FACULTY" && (
        <>
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments/${assignmentId}/Editor`}
            className="text-primary"
            title="Edit Assignment"
          >
            <FaPen className="cursor-pointer" />
          </Link>
          <FaTrash
            className="text-danger cursor-pointer"
            title="Delete Assignment"
            data-bs-toggle="modal"
            data-bs-target={`#wd-delete-dialog-${assignmentId}`}
          />
          <DeleteDialog
            id={assignmentId}
            name="this assignment"
            onDelete={() => deleteAssignment(assignmentId)}
          />
        </>
      )}
      <IoEllipsisVertical className="fs-4 cursor-pointer" title="More Options" />
    </div>
  );
}
