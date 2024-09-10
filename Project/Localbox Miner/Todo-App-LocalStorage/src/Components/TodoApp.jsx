import React, { useEffect, useState } from "react";

let nextId = 0;

function TodoApp() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('key'))||
    []);
  const [editingId, setEditingId] = useState(null);

  function handleTaskAdd() {
    if (task.trim() === "") return;
    setItems([...items, { id: nextId++, task: task }]);
    setTask("");
  }
  // store in localstorage
  useEffect(() => {
    localStorage.setItem('key',JSON.stringify(items))
  },[items]);

  const itemData = items.map((item) => (
    <div
      key={item.id}
      className="todo-item animate__animated animate__fadeInUp"
    >
      <span className="task-text">{item.task}</span>
      <div className="action-buttons">
        <button className="edit-btn" onClick={() => handleTaskEdit(item.id)}>
          Edit ✒
        </button>
        <button className="delete-btn" onClick={() => handleTaskDelete(item.id)}>
          Delete❌
        </button>
      </div>
    </div>
  ));

  function handleTaskDelete(id) {
    setItems(items.filter((e) => e.id !== id));
  }

  function handleTaskEdit(id) {
    const editedTask = items.find((item) => item.id === id);
    setTask(editedTask.task);
    setEditingId(id);
  }

  function handleTaskUpdate() {
    if (task.trim() === "") return;
    setItems(
      items.map((item) => {
        if (item.id === editingId) {
          return { ...item, task: task };
        }
        return item;
      })
    );
    setTask("");
    setEditingId(null);
  }

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1 className="app-title animate__animated animate__bounceInDown">Todo App</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="task-form animate__animated animate__fadeIn"
        >
          <input
            type="text"
            className="task-input"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className={`submit-btn ${editingId !== null ? "update-btn" : ""}`}
            onClick={editingId !== null ? handleTaskUpdate : handleTaskAdd}
          >
            {editingId !== null ? "Update" : "Add"}
          </button>
        </form>
        <div className="task-list">{itemData}</div>
      </div>
    </div>
  );
}

export default TodoApp;