import React, { useState } from "react";

const TodoForm = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {};

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="What's the task title?"
        />
      </div>
      <div className="todo-input-item">
        <label>Description</label>
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="What's the task description?"
        />
      </div>
      <div className="todo-input-item">
        <button type="button" onClick={handleAddTodo} className="primaryBtn">
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
