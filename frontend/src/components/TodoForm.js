import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const { dispatch } = useContext(TodoContext);

  const handleAddTodo = () => {
    dispatch({ type: "ADD_TODO", payload: { newTitle, newDescription } });
    setNewTitle("");
    setNewDescription("");
  };

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
