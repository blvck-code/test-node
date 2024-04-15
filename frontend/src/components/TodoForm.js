import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { dispatch } = useContext(TodoContext);

  const handleAddTodo = async () => {
    const resp = await fetch("http://localhost:8000/api/todo/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await resp.json();

    if (resp.ok) {
      console.log("Success ==>>", json);
      dispatch({ type: "ADD_TODO", payload: json });

      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's the task title?"
        />
      </div>
      <div className="todo-input-item">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
