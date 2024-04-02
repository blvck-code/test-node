import React, { useContext, useReducer, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [currentEditedItem, setCurrentEditedItem] = useState("");

  const handleUpdateTitle = () => {};
  const handleUpdateDescription = () => {};
  const handleUpdateToDo = () => {};
  const handleDeleteTodo = () => {};
  const handleComplete = () => {};
  const handleEdit = () => {};
  const handleDeleteCompletedTodo = () => {};

  const { todos } = useContext(TodoContext);

  return (
    <>
      <div className="btn-area">
        <button
          className={`secondaryBtn ${isCompleteScreen === false && "active"}`}
          onClick={() => setIsCompleteScreen(false)}>
          Todo {todos.length}
        </button>
        <button
          className={`secondaryBtn ${isCompleteScreen === true && "active"}`}
          onClick={() => setIsCompleteScreen(true)}>
          Completed
        </button>
      </div>

      <div className="todo-list">
        {isCompleteScreen === false &&
          todos.map((item, index) => {
            if (currentEdit === index) {
              return (
                <div className="edit__wrapper" key={index}>
                  <input
                    placeholder="Updated Title"
                    onChange={(e) => handleUpdateTitle(e.target.value)}
                    value={currentEditedItem.title}
                  />
                  <textarea
                    placeholder="Updated Title"
                    rows={4}
                    onChange={(e) => handleUpdateDescription(e.target.value)}
                    value={currentEditedItem.description}
                  />
                  <button
                    type="button"
                    onClick={handleUpdateToDo}
                    className="primaryBtn">
                    Update
                  </button>
                </div>
              );
            } else {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="icon"
                      onClick={() => handleDeleteTodo(index)}
                      title="Delete?"
                    />
                    <BsCheckLg
                      className="check-icon"
                      onClick={() => handleComplete(index)}
                      title="Complete?"
                    />
                    <AiOutlineEdit
                      className="check-icon"
                      onClick={() => handleEdit(index, item)}
                      title="Edit?"
                    />
                  </div>
                </div>
              );
            }
          })}

        {isCompleteScreen === true &&
          todos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>
                    <small>Completed on: {item.completedOn}</small>
                  </p>
                </div>

                <div>
                  <AiOutlineDelete
                    className="icon"
                    onClick={() => handleDeleteCompletedTodo(index)}
                    title="Delete?"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TodoList;