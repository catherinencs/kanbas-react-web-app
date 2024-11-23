import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "CS4550",
    name: "Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    course: "Computer Science",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects" className="w-100">
      <h3 className="mb-4">Working With Objects</h3>

      {/* Retrieving Objects */}
      <section>
        <h4>Retrieving Objects</h4>
        <div className="mb-3">
          <a
            id="wd-retrieve-assignments"
            className="btn btn-primary me-2"
            href={`${ASSIGNMENT_API_URL}`}
          >
            Get Assignment
          </a>
          <a
            id="wd-retrieve-module"
            className="btn btn-primary"
            href={`${MODULE_API_URL}`}
          >
            Get Module
          </a>
        </div>
      </section>

      <hr />

      {/* Retrieving Properties */}
      <section>
        <h4>Retrieving Properties</h4>
        <div className="mb-3">
          <a
            id="wd-retrieve-assignment-title"
            className="btn btn-primary me-2"
            href={`${REMOTE_SERVER}/lab5/assignment/title`}
          >
            Get Assignment Title
          </a>
          <a
            id="wd-retrieve-module-name"
            className="btn btn-primary"
            href={`${MODULE_API_URL}/name`}
            
          >
            Get Module Name
          </a>
        </div>
      </section>

      <hr />

      {/* Modifying Assignment Properties */}
      <section>
        <h4>Modifying Assignment</h4>
        <div className="mb-3">
          <label htmlFor="wd-assignment-title" className="form-label">
            Assignment Title
          </label>
          <div className="d-flex">
            <input
              id="wd-assignment-title"
              className="form-control me-2"
              defaultValue={assignment.title}
              onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })
              }
            />
            <a
              id="wd-update-assignment-title"
              className="btn btn-primary"
              href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
            >
              Update
            </a>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="wd-assignment-score" className="form-label">
            Assignment Score
          </label>
          <div className="d-flex">
            <input
              id="wd-assignment-score"
              className="form-control me-2"
              type="number"
              defaultValue={assignment.score}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  score: Number(e.target.value),
                })
              }
            />
            <a
              id="wd-update-assignment-score"
              className="btn btn-primary"
              href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
            >
              Update
            </a>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="wd-assignment-completed" className="form-label">
            Completed
          </label>
          <div className="d-flex align-items-center">
            <input
              id="wd-assignment-completed"
              className="form-check-input me-2"
              type="checkbox"
              checked={assignment.completed}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  completed: e.target.checked,
                })
              }
            />
            <a
              id="wd-update-assignment-completed"
              className="btn btn-primary"
              href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
            >
              Update
            </a>
          </div>
        </div>
      </section>

      <hr />

      {/* Modifying Module Properties */}
      <section>
        <h4>Modifying Module</h4>
        <div className="mb-3">
          <label htmlFor="wd-module-name" className="form-label">
            Module Name
          </label>
          <div className="d-flex">
            <input
              id="wd-module-name"
              className="form-control me-2"
              defaultValue={module.name}
              onChange={(e) =>
                setModule({ ...module, name: e.target.value })
              }
            />
            <a
              id="wd-update-module-name"
              className="btn btn-primary"
              href={`${MODULE_API_URL}/name/${module.name}`}
            >
              Update
            </a>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="wd-module-description" className="form-label">
            Module Description
          </label>
          <div className="d-flex">
            <input
              id="wd-module-description"
              className="form-control me-2"
              defaultValue={module.description}
              onChange={(e) =>
                setModule({ ...module, description: e.target.value })
              }
            />
            <a
              id="wd-update-module-description"
              className="btn btn-primary"
              href={`${MODULE_API_URL}/description/${module.description}`}
            >
              Update
            </a>
          </div>
          <hr />
        </div>
      </section>
    </div>
  );
}
