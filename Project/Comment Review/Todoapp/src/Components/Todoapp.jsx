import React, { useState } from "react";

let nextId = 0;

function ToDoList() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);

  function handleTaskAdd() {
    setItems([...items, { id: nextId++, task: task }]);
    setTask("");
  }

  const itemData = items.map((item) => (
    <div
      key={item.id}
      className="d-flex justify-content-between align-items-center p-3 mb-2 border-bottom"
    >
      <span className="text-capitalize flex-grow-1">{item.task}</span>
      <div className="ms-3">
        <button
          className="btn btn-link text-decoration-none me-2"
          onClick={() => handleTaskEdit(item.id)}
        >
          ✏️
        </button>
        <button
          className="btn btn-link text-danger text-decoration-none"
          onClick={() => handleTaskDelete(item.id)}
        >
          ❌
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
    <div className="container mt-5 my-5 p-4 bg-white shadow rounded">
      <h1 className="text-center mb-4 text-primary">Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="d-flex justify-content-center mb-4"
      >
        <input
          type="text"
          className="form-control form-control-lg me-2"
          placeholder="What needs to be done?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="btn btn-primary btn-lg"
          onClick={editingId !== null ? handleTaskUpdate : handleTaskAdd}
        >
          {editingId !== null ? "Update" : "Add"}
        </button>
      </form>
      <div>{itemData}</div>
    </div>
  );
}

export default ToDoList;
