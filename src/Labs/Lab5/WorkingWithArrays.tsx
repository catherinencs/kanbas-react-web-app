import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const [deleteTodoId, setDeleteTodoId] = useState("1"); // Separate state for deleting

  const API = `${REMOTE_SERVER}/lab5/todos`;

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      {/* Retrieving Todos */}
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />

      {/* Retrieving a Todo by ID */}
      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        defaultValue={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      {/* Filtering Todos */}
      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      {/* Creating a Todo */}
      <h3>Creating new Items in an Array</h3>
      <a id="wd-create-todo" className="btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <hr />

      {/* Deleting a Todo */}
      <h3>Deleting from an Array</h3>
      <a
        id="wd-delete-todo"
        className="btn btn-primary float-end"
        href={`${API}/${deleteTodoId}/delete`}
      >
        Delete Todo with ID = {deleteTodoId}
      </a>
      <input
        defaultValue={deleteTodoId}
        className="form-control w-50"
        onChange={(e) => setDeleteTodoId(e.target.value)}
      />
      <hr />

      {/* Updating an Item in an Array */}
      <h3>Updating an Item in an Array</h3>
      <label htmlFor="wd-todo-id" className="form-label">
        Todo ID
      </label>
      <input
        id="wd-todo-id"
        className="form-control w-50 mb-3"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <div className="mb-4">
        <h5>Update Title</h5>
        <div className="d-flex align-items-center">
          <input
            id="wd-todo-title"
            className="form-control w-75 me-2"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
          <a
            href={`${API}/${todo.id}/title/${todo.title}`}
            className="btn btn-primary"
          >
            Update Title
          </a>
        </div>
      </div>

      <div className="mb-4">
        <h5>Update Description</h5>
        <div className="d-flex align-items-center">
          <input
            id="wd-todo-description"
            className="form-control w-75 me-2"
            value={todo.description}
            onChange={(e) =>
              setTodo({ ...todo, description: e.target.value })
            }
          />
          <a
            href={`${API}/${todo.id}/description/${todo.description}`}
            className="btn btn-primary"
          >
            Update Description
          </a>
        </div>
      </div>

      <div className="mb-4">
        <h5>Update Completed Status</h5>
        <div className="d-flex align-items-center">
          <input
            id="wd-todo-completed"
            type="checkbox"
            checked={todo.completed}
            className="form-check-input me-2"
            onChange={(e) =>
              setTodo({ ...todo, completed: e.target.checked })
            }
          />
          <a
            href={`${API}/${todo.id}/completed/${todo.completed}`}
            className="btn btn-primary"
          >
            Update Completed
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}
