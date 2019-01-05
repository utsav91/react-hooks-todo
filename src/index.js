import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useTodos } from "./customHooks";
import "./styles.css";

const App = () => {
  const { todos, addTodo, checkTodo, deleteTodo } = useTodos([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
