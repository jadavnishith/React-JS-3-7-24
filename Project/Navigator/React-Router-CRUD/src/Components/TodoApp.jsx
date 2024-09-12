import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let nextId = 0;

function TodoApp({ items, setItems }) {
  const [task, setTask] = useState("");
  // const navigate = useNavigate();

  function handleTaskAdd() {
    if (task.trim() === "") return;
    setItems([...items, { id: nextId++, task }]);
    setTask("");
    // navigate("/list");
  }

  // Store in localStorage
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="text-center mb-4">Add Task</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="d-flex mb-3"
          >
            <input
              type="text"
              className="form-control me-2"
              placeholder="Enter a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="btn btn-success"
              onClick={handleTaskAdd}
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;

