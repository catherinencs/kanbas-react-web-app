import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  // Check if the current user has the FACULTY role
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  return (
    <div className="float-end">
      {/* Conditionally render the pencil and trash icons for faculty only */}
      {isFaculty && (
        <>
          <FaPencil className="text-primary me-3" onClick={() => editModule(moduleId)} />
          <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)} />
        </>
      )}
      <GreenCheckmark />
      {isFaculty && (<BsPlus className="fs-4 me-2" />)}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
