import React, { useEffect, useState } from "react";

function TodoList({ items, setItems }) {
  const [editingId, setEditingId] = useState(null);
  const [task, setTask] = useState("");

  function handleTaskDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleTaskEdit(id) {
    const taskToEdit = items.find((item) => item.id === id);
    setTask(taskToEdit.task);
    setEditingId(id);
  }

  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem("key"));
    setItems(getData)
    console.log(getData);
    
}, []);

  function handleTaskUpdate() {
    setItems(
      items.map((item) => {
        if (item.id === editingId) {
          return { ...item, task };
        }
        return item;
      })
    );
    setTask("");
    setEditingId(null);
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="text-center mb-4">Task List</h1>
          {items.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center border p-2 mb-2"
            >
              {editingId === item.id ? (
                <>
                  <input
                    type="text"
                    className="form-control me-2"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={handleTaskUpdate}
                  >
                    Update
                  </button>
                </>
              ) : (
                <>
                  <span>{item.task}</span>
                  <div>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleTaskEdit(item.id)}
                    >
                      Edit ✒
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleTaskDelete(item.id)}
                    >
                      Delete ❌
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
