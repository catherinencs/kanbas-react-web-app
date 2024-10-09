import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
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

      {/* Publish All Dropdown and Add Module button */}
      <div className="d-flex">
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
          id="wd-add-module-btn"
          className="btn btn-lg btn-danger d-inline-flex align-items-center"
        >
          <FaPlus className="me-2" />
          Module
        </button>
      </div>
    </div>
  );
}