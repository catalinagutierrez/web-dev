import React from "react";
import TodoItem from "./todo-item";
import todos from "./todos.json";

const TodoList = () => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, i = 0) => {
          i++;
          return <TodoItem todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
