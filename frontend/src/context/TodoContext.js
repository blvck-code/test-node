import { createContext, useReducer } from "react";

export const TodoContext = createContext();

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("Payload ==>>", action);
      return {
        todos: [action.payload, ...state.todos],
      };
    case "SET_TODOS":
      return {
        todos: action.payload,
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((t) => t._id !== action.payload._id),
      };
    default:
      return state;
  }
};

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
  });

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
