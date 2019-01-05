import { useState } from "react";

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);
  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, { todoText, checked: false }]);
    },
    checkTodo: todoIndex => {
      setTodos(
        todos.map((todo, index) => {
          if (todoIndex === index) {
            todo.checked = !todo.checked;
          }
          return todo;
        })
      );
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
    }
  };
};

export const useForm = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  return {
    onChange: event => {
      setValue(event.target.value);
    },
    reset: () => setValue(""),
    value
  };
};
