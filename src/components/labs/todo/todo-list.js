import React from "react";
import TodoItem from "./todo-item";
import todos from "./todos.json";

const TodoList = () => {
  return (
    <ul>
      {todos.map((todo, i = 0) => {
        i++;
        return <TodoItem todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
