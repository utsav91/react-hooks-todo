import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = ({ todos, deleteTodo, checkTodo }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index + Math.random()} dense button>
        <Checkbox
          tabIndex={-1}
          disableRipple
          onClick={() => checkTodo(index)}
          checked={todo.checked}
        />
        <ListItemText primary={todo.todoText} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default TodoList;
