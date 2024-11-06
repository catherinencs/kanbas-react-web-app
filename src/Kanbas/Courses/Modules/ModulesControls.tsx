import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";
import { useSelector } from "react-redux";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  // Check if the current user has the FACULTY role
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  return (
    <div id="wd-modules-controls" className="text-nowrap d-flex justify-content-between mb-3">
      {/* Collapse All and View Progress buttons */}
      <div className="d-flex">
        <button id="wd-collapse-all" className="btn btn-lg btn-light me-2">
          Collapse All
        </button>
        <button id="wd-view-progress" className="btn btn-lg btn-light">
          View Progress
        </button>
      </div>

      {/* Conditionally render Publish All Dropdown and Add Module button for faculty only */}
      <div className="d-flex">
        {isFaculty && (
          <>
            {/* Publish All Dropdown */}
            <div className="dropdown me-2">
              <button
                id="wd-publish-all-btn"
                className="btn btn-lg btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <GreenCheckmark />
                Publish All
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
                    <GreenCheckmark />
                    Publish all modules and items
                  </a>
                </li>
                <li>
                  <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                    <GreenCheckmark />
                    Publish modules only
                  </a>
                </li>
                <li>
                  <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
                    <GreenCheckmark />
                    Unpublish all modules and items
                  </a>
                </li>
                <li>
                  <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
                    <GreenCheckmark />
                    Unpublish modules only
                  </a>
                </li>
              </ul>
            </div>

            {/* Add Module Button */}
            <button
              className="btn btn-lg btn-danger me-1 float-end"
              id="wd-add-module-btn"
              data-bs-toggle="modal"
              data-bs-target="#wd-add-module-dialog"
            >
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Module
            </button>
            <ModuleEditor
              dialogTitle="Add Module"
              moduleName={moduleName}
              setModuleName={setModuleName}
              addModule={addModule}
            />
          </>
        )}
      </div>
    </div>
  );
}
