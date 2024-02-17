import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "../styles/addTodo.css";

function AddTodo() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    dispatch(addTodo(todoText));
    setTodoText("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Enter your todo"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <button className="submit-button" type="submit">
        Add Todo
      </button>{" "}
    </form>
  );
}

export default AddTodo;
