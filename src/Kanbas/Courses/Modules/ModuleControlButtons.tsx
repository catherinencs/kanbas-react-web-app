import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import DeleteDialog from "../DeleteDialog"; 

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  return (
    <div className="float-end">
      {isFaculty && (
        <>
          <FaPencil className="text-primary me-3" onClick={() => editModule(moduleId)} />
          <FaTrash
            className="text-danger me-2 mb-1"
            data-bs-toggle="modal"
            data-bs-target={`#wd-delete-dialog-${moduleId}`} 
          />
        </>
      )}
      <GreenCheckmark />
      {isFaculty && <BsPlus className="fs-4 me-2" />}
      <IoEllipsisVertical className="fs-4" />

      <DeleteDialog
        id={moduleId}
        name="this module"
        onDelete={() => deleteModule(moduleId)}
      />
    </div>
  );
}
