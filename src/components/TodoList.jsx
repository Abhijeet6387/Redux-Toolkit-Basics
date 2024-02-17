import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import "../styles/todoList.css";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>TodoList</h1>
      <ul className="todo-list">
        {todos.length === 0 ? (
          <p>No todos found !</p>
        ) : (
          <>
            {todos.map((todo) => (
              <li key={todo.id} className="todo-item">
                {todo.text}
                <button onClick={() => handleRemoveTodo(todo.id)}>
                  Remove
                </button>
              </li>
            ))}
          </>
        )}{" "}
      </ul>
    </div>
  );
}

export default TodoList;
