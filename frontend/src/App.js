import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <h2>Todo App</h2>
      <TodoContextProvider>
        <div className="todo-wrapper">
          <TodoForm />
          <TodoList />
        </div>
      </TodoContextProvider>
    </div>
  );
}

export default App;
