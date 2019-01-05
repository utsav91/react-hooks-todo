import React from "react";
import TextField from "@material-ui/core/TextField";
import { useForm } from "./customHooks";

const TodoForm = ({ saveTodo }) => {
  const { value, onChange, reset } = useForm("");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
