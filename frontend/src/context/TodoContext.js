import { createContext, useReducer } from "react";

export const TodoContext = createContext();

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("Payload ==>>", action);
      return {
        todos: [action.payload, ...state.todos],
      };
    default:
      return state;
  }
};

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [
      {
        id: 1,
        title: "Wash dishes",
        description: "High priority",
        isComplete: false,
      },
      {
        id: 2,
        title: "Go shopping",
        description: "High priority",
        isComplete: true,
      },
    ],
  });

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
